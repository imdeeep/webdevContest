import React, { useState } from 'react';
import { Search, Grid, List, X, ExternalLink, Download, Eye, Box, Image, Film, Link, View } from 'lucide-react';
import { Data } from './lib/data';

const Library = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Filter products based on search and category
    const filteredProducts = Data.categories.reduce((acc, category) => {
        const categoryProducts = category.products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        return [...acc, ...categoryProducts.map(product => ({ ...product, categoryColor: category.color, categoryName: category.name }))];
    }, []);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const totalProducts = Data.categories.reduce((sum, cat) => sum + cat.products.length, 0);

    return (
        <div className="min-h-screen py-20 border-b border-dashed border-zinc-600 text-white">
            {/* Header */}
            <div className="z-40">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="relative text-center mb-14">
                        <div className="w-100 h-15  right-72 -top-4 absolute bg-gradient-to-tr from-blue-500 via-purple-800 to-red-700"></div>
                        <h1 className="text-5xl creto mix-blend-lighten font-bold tracking-wide text-white mb-4">Web Design Content Library</h1>
                        <p className="text-gray-300/50 text-sm max-w-3xl mx-auto">
                            Ready-to-use product content for web design competitions. High-quality images, descriptions,
                            specifications, and reference links - everything you need to focus on creating amazing designs.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative max-w-xl mx-auto mb-6">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-zinc-600 rounded-sm text-white placeholder-zinc-400 focus:outline-none "
                        />
                    </div>

                    {/* Category Filters & View Toggle */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'all'
                                        ? 'bg-gradient-to-tr to-blue-500 via-purple-800 from-red-700 text-white'
                                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                    }`}
                            >
                                All
                            </button>
                            {Data.categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.id
                                            ? 'bg-gradient-to-tr to-blue-500 via-purple-800 from-red-700 text-white'
                                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-gray-400 text-sm">{filteredProducts.length} items available</span>
                            <div className="flex bg-white/10 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid/List */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white/10 rounded-xl overflow-hidden border border-zinc-600 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                                onClick={() => openModal(product)}
                            >
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div
                                        className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-medium bg-white/5 mix-blend-difference text-white"

                                    >
                                        {product.categoryName}
                                    </div>

                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-white mb-2 line-clamp-1">{product.name}</h3>
                                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.shortDescription}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-green-400 font-medium">{product.price}</span>
                                        <div className="flex flex-wrap gap-1">
                                            {product.tags.slice(0, 2).map((tag) => (
                                                <span key={tag} className="bg-white/20 text-gray-300 px-2 py-1 rounded text-xs">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white/10 rounded-xl p-6 border border-zinc-600 transition-all duration-300 cursor-pointer group"
                                onClick={() => openModal(product)}
                            >
                                <div className="flex gap-6">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                                    />
                                    <div className="flex-grow">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h3 className="font-semibold text-white text-lg">{product.name}</h3>
                                                    <span
                                                        className="px-2 py-1 rounded-sm text-xs bg-white/5 font-medium text-white"
                                                    >
                                                        {product.categoryName}
                                                    </span>
                                                </div>
                                                <p className="text-gray-400 mb-3">{product.shortDescription}</p>
                                            </div>
                                            <span className="text-green-400 font-medium text-lg">{product.price}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {product.tags.map((tag) => (
                                                <span key={tag} className="bg-white/20 text-gray-300 px-2 py-1 rounded text-xs">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>


            {/* Change The model Ui and make it compact and simplicuty */}
            {/* Modal */}
            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-3">
                    <div className="bg-black/60 border border-zinc-600/50 rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-6 border-b border-zinc-700/30">
                            <div className="flex items-center gap-3">
                                <h2 className="text-xl font-medium text-white/90">{selectedProduct.name}</h2>
                                <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
                                <span className="text-sm text-zinc-400">{selectedProduct.categoryName}</span>
                            </div>
                            <button
                                onClick={closeModal}
                                className="w-8 h-8 flex items-center justify-center hover:bg-white/5 rounded transition-colors"
                            >
                                <X className="w-5 h-5 text-zinc-400" />
                            </button>
                        </div>

                        <div className="p-6">
                            {/* Product Hero Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
                                <div className="lg:col-span-2">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        className="w-full h-64 lg:h-80 object-cover rounded"
                                    />
                                </div>
                                <div className="lg:col-span-3">
                                    <p className="text-zinc-300 mb-4 leading-relaxed">{selectedProduct.shortDescription}</p>
                                    <div className="text-2xl font-semibold text-emerald-400 mb-6">{selectedProduct.price}</div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-white font-medium mb-3">Available Colors</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProduct.colors.map((color) => (
                                                    <span key={color} className="bg-zinc-800/50 text-zinc-300 px-3 py-1.5 rounded text-sm">
                                                        {color}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-3">Tags</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProduct.tags.map((tag) => (
                                                    <span key={tag} className="bg-zinc-800/30 text-zinc-400 px-3 py-1.5 rounded text-sm">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Assets Section - Expanded Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Images */}
                                <div className="bg-zinc-900/40 border border-zinc-800/50 rounded p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <Image className="w-5 h-5 text-zinc-400" />
                                            <h3 className="text-white font-medium">Images</h3>
                                        </div>
                                        <span className="text-sm text-zinc-500">{selectedProduct.assets.images.length} items</span>
                                    </div>
                                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                                        {selectedProduct.assets.images.map((img, index) => (
                                            <div key={index} className="aspect-square relative group overflow-hidden rounded">
                                                <img
                                                    src={img}
                                                    alt={`${selectedProduct.name} ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <a href={img} target='_blank'>
                                                        <View className="w-4 h-4 text-white" />
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Videos */}
                                <div className="bg-zinc-900/40 border border-zinc-800/50 rounded p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <Film className="w-5 h-5 text-zinc-400" />
                                            <h3 className="text-white font-medium">Videos</h3>
                                        </div>
                                        <span className="text-sm text-zinc-500">{selectedProduct.assets.videos.length} items</span>
                                    </div>
                                    <div className="space-y-3">
                                        {selectedProduct.assets.videos.map((video, index) => (
                                            <div key={index} className="flex items-center justify-between bg-zinc-800/30 rounded p-3 group hover:bg-zinc-800/50 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-zinc-700 rounded flex items-center justify-center">
                                                        <Film className="w-4 h-4 text-zinc-400" />
                                                    </div>
                                                    <span className="text-zinc-300">Product Demo Video {index + 1}</span>
                                                </div>
                                                <a
                                                    href={video}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3D Models */}
                                <div className="bg-zinc-900/40 border border-zinc-800/50 rounded p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <Box className="w-5 h-5 text-zinc-400" />
                                            <h3 className="text-white font-medium">3D Models</h3>
                                        </div>
                                        <span className="text-sm text-zinc-500">{selectedProduct.assets.models3d.length} items</span>
                                    </div>
                                    <div className="space-y-3">
                                        {selectedProduct.assets.models3d.map((model, index) => (
                                            <div key={index} className="flex items-center justify-between bg-zinc-800/30 rounded p-3 group hover:bg-zinc-800/50 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-zinc-700 rounded flex items-center justify-center">
                                                        <Box className="w-4 h-4 text-zinc-400" />
                                                    </div>
                                                    <span className="text-zinc-300">3D Model {index + 1}</span>
                                                </div>
                                                <a
                                                    href={model}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Reference Links */}
                                <div className="bg-zinc-900/40 border border-zinc-800/50 rounded p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <Link className="w-5 h-5 text-zinc-400" />
                                            <h3 className="text-white font-medium">Reference Links</h3>
                                        </div>
                                        <span className="text-sm text-zinc-500">{selectedProduct.referenceLinks.length} items</span>
                                    </div>
                                    <div className="space-y-3">
                                        {selectedProduct.referenceLinks.map((link, index) => (
                                            <div key={index} className="flex items-center justify-between bg-zinc-800/30 rounded p-3 group hover:bg-zinc-800/50 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-zinc-700 rounded flex items-center justify-center">
                                                        <Link className="w-4 h-4 text-zinc-400" />
                                                    </div>
                                                    <span className="text-zinc-300" title={link.title}>
                                                        {link.title}
                                                    </span>
                                                </div>
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Library;