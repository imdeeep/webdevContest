import React, { useState, useEffect } from "react";
import { BorderBeam } from "../components/ui/border-beam";
import {
  Download,
  Copy,
  Image,
  FileText,
  ExternalLink,
  Search,
  Grid,
  List,
  AlertCircle,
} from "lucide-react";

const ContentLibrary = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedItem, setCopiedItem] = useState(null);
  const [contentData, setContentData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load content data from JSON file
  useEffect(() => {
    const loadContentData = async () => {
      try {
        setLoading(true);
        const response = await fetch("./contentData.json");
        if (!response.ok) {
          throw new Error("Failed to load content data");
        }
        const data = await response.json();
        setContentData(data);
        setError(null);
      } catch (err) {
        console.error("Error loading content data:", err);
        setError("Failed to load content data. Using fallback data.");
        // Fallback to embedded data
        setContentData(getFallbackData());
      } finally {
        setLoading(false);
      }
    };

    loadContentData();
  }, []);

  // Fallback data in case JSON file is not available

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Loading Content Library...
          </h2>
          <p className="text-gray-600">
            Fetching product data from contentData.json
          </p>
        </div>
      </div>
    );
  }

  const categories = ["All", ...Object.keys(contentData)];

  const copyToClipboard = async (text, type) => {
    await navigator.clipboard.writeText(text);
    setCopiedItem(`${type}-${Date.now()}`);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const getFilteredProducts = () => {
    let products = [];

    if (activeCategory === "All") {
      products = Object.entries(contentData).flatMap(([category, items]) =>
        items.map((item) => ({ ...item, categoryName: category }))
      );
    } else {
      products =
        contentData[activeCategory]?.map((item) => ({
          ...item,
          categoryName: activeCategory,
        })) || [];
    }

    if (searchTerm) {
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return products;
  };

  const ContentCard = ({ product }) => {
    return (
      <div className="bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-800 overflow-hidden">
        {/* Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
            {product.categoryName}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-lg text-white mb-2">{product.name}</h3>
          <p className="text-gray-400 text-sm mb-3">{product.shortDesc}</p>

          <div className="space-y-3">
            {/* Quick Info */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">{product.category}</span>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => copyToClipboard(product.shortDesc, "short-desc")}
                className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-xs"
              >
                <Copy className="w-3 h-3" />
                Copy Description
              </button>

              <button
                onClick={() => copyToClipboard(product.image, "image-url")}
                className="flex items-center justify-center gap-1 px-3 py-2 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-xs"
              >
                <Image className="w-3 h-3" />
                Copy Image URL
              </button>
            </div>

            {/* Expandable Details */}
            <details className="group">
              <summary className="cursor-pointer text-blue-400 text-sm font-medium hover:text-blue-300">
                View Full Content Package
              </summary>

              <div className="mt-3 space-y-3 p-3 bg-black rounded-lg">
                {/* Long Description */}
                <div>
                  <h4 className="font-semibold text-sm text-white mb-1">
                    Long Description:
                  </h4>
                  <p className="text-xs text-gray-300 mb-2">
                    {product.longDesc}
                  </p>
                  <button
                    onClick={() =>
                      copyToClipboard(product.longDesc, "long-desc")
                    }
                    className="text-xs text-blue-400 hover:text-blue-300"
                  >
                    Copy Long Description
                  </button>
                </div>

                {/* Specifications */}
                <div>
                  <h4 className="font-semibold text-sm text-white mb-1">
                    Specifications:
                  </h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {product.specs.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() =>
                      copyToClipboard(product.specs.join("\n• "), "specs")
                    }
                    className="text-white hover:text-blue-300 mt-1 block"
                  >
                    Copy Specifications
                  </button>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 gap-2 text-xs text-gray-300">
                  <div>
                    <span className="font-semibold text-white">Colors:</span>{" "}
                    {product.colors.join(", ")}
                  </div>
                  <div>
                    <span className="font-semibold text-white">
                      Dimensions:
                    </span>{" "}
                    {product.dimensions}
                  </div>
                </div>

                {/* Reference Links */}
                <div>
                  <h4 className="font-semibold text-sm text-white mb-1">
                    Reference Links:
                  </h4>
                  <div className="space-y-1">
                    {product.referenceLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    );
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen mt-[200px] ">
      {/* Error Banner */}
      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 mr-3" />
            <div>
              <p className="text-sm text-yellow-800">
                {error} Make sure `contentData.json` is available in your public
                folder.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className=" shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center mb-12 px-4 md:px-0">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Web Design Content Library
            </h1>
            <p className="text-gray-400 text-lg md:text-2xl mt-6 max-w-3xl mx-auto">
              Ready-to-use product content for web design competitions.
              High-quality images, descriptions, specifications, and reference
              links - everything you need to focus on creating amazing designs.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4  m-10 bg-black p-5 ">
            {/* Search Input */}

            <div className="relative w-full md:flex-1 max-w-lg mx-auto md:mx-0 rounded-3xl">
              <BorderBeam />

              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search problem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-2 "
              />
            </div>

            {/* View Mode Buttons */}
            <div className="inline-flex bg-gray-700 rounded-full p-1 text-gray-300">
              {/* Grid Button */}
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  viewMode === "grid"
                    ? "bg-gray-800 text-white shadow"
                    : "bg-transparent hover:bg-gray-600 hover:text-white"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>

              {/* List Button */}
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  viewMode === "list"
                    ? "bg-gray-800 text-white shadow"
                    : "bg-transparent hover:bg-gray-600 hover:text-white"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border hover:border-blue-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {activeCategory === "All" ? "All Content" : activeCategory}
          </h2>
          <span className="text-gray-600 text-sm">
            {filteredProducts.length} items available
          </span>
        </div>

        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }
        >
          {filteredProducts.map((product) => (
            <ContentCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No content found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or selecting a different category.
            </p>
          </div>
        )}
      </div>

      {/* Copy Success Notification */}
      {copiedItem && (
        <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
          Content copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default ContentLibrary;
