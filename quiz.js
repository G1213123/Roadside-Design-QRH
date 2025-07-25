// Main application controller
class RoadsideCatalog {
    constructor() {
        this.currentCategory = 'all';
        this.currentView = 'catalog';
        this.selectedItem = null;
        this.categoryNames = {
            'all': 'All Categories',
            'road': 'Road Geometry',
            'pavement': 'Pavement',
            'kerbs': 'Kerbs & Edges',
            'barriers': 'Crash Barriers',
            'railings': 'Railings, Fencing, Gate',
            'signs': 'Traffic Signs',
            'signals': 'Signal Equipment',
            'bollards': 'Traffic Bollards',
            'lighting': 'Street Lighting',
            'drainage': 'Drainage'
        };
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadCatalog();
    }

    bindEvents() {
        // Category navigation
        document.querySelectorAll('.category-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.selectCategory(category);
            });
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        searchBtn.addEventListener('click', () => this.performSearch());
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performSearch();
        });

        // Detail panel close
        document.getElementById('closeDetail').addEventListener('click', () => {
            this.closeDetailPanel();
        });

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
    }

    selectCategory(category) {
        // Update active category
        document.querySelectorAll('.category-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');

        this.currentCategory = category;
        this.updateBreadcrumb(category);
        this.loadCatalog();
    }

    updateBreadcrumb(category) {
        const breadcrumb = document.getElementById('breadcrumbText');
        breadcrumb.textContent = `Home > ${this.categoryNames[category]}`;
    }

    loadCatalog() {
        const grid = document.getElementById('furnitureGrid');
        const items = getFurnitureByCategory(this.currentCategory);
        
        grid.innerHTML = '';
        
        if (items.length === 0) {
            grid.innerHTML = '<div class="no-items">No items found in this category.</div>';
            return;
        }

        items.forEach(item => {
            const card = this.createItemCard(item);
            grid.appendChild(card);
        });
    }

    createItemCard(item) {
        const card = document.createElement('div');
        card.className = 'furniture-card';
        card.dataset.itemId = item.id;
        card.onclick = () => catalog.showItemDetail(item.id);
        
        // Generate URLs for both drawing and manual (using first element from arrays)
        const drawingUrl = item.drawings && item.drawings.length > 0 ? getDrawingUrl(item.drawings[0]) : null;
        const manualUrl = item.manuals && item.manuals.length > 0 ? getManualUrl(item.manuals[0]) : null;
        
        card.innerHTML = `
            <div class="card-image">
                <img src="assets/${item.id}.png" alt="${item.name}" 
                     onerror="this.src='data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"150\" viewBox=\"0 0 200 150\"><rect width=\"200\" height=\"150\" fill=\"%23f0f0f0\"/><text x=\"100\" y=\"75\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" fill=\"%23666\">${(item.drawings && item.drawings[0]) || (item.manuals && item.manuals[0]) || item.id}</text></svg>'">
                <div class="card-overlay">
                    <span class="drawing-ref">${this.categoryNames[item.category]}</span>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-description">${item.description}</p>
                <div class="card-meta">
                    <div class="reference-links">
                        ${item.drawings && item.drawings.length > 0 ? `
                        <a href="${drawingUrl}" target="_blank" class="ref-link drawing-ref-link" 
                           onclick="event.stopPropagation()" title="View HYD Standard Drawing">
                            <i class="fas fa-drafting-compass"></i> 
                            <span>${item.drawings[0].toUpperCase()}</span>
                        </a>
                        ` : ''}
                        ${item.manuals && item.manuals.length > 0 ? `
                        <a href="${manualUrl}" target="_blank" class="ref-link manual-ref-link" 
                           onclick="event.stopPropagation()" title="View Technical Manual">
                            <i class="fas fa-book"></i> 
                            <span>${item.manuals[0].toUpperCase()}</span>
                        </a>
                        ` : ''}
                    </div>
                </div>
            </div>
            <div class="card-actions">
                <button class="btn-primary" onclick="catalog.showItemDetail('${item.id}')">
                    <i class="fas fa-info-circle"></i> View Details
                </button>
            </div>
        `;

        return card;
    }

    showItemDetail(itemId) {
        const item = this.findItemById(itemId);
        if (!item) return;

        this.selectedItem = item;
        this.populateDetailPanel(item);
        this.showDetailPanel();
    }

    findItemById(itemId) {
        const allItems = getAllFurniture();
        return allItems.find(item => item.id === itemId);
    }

    populateDetailPanel(item) {
        document.getElementById('detailTitle').textContent = item.name;
        
        // Populate overview tab
        this.populateOverviewTab(item);
        this.populateUsageTab(item);
        this.populateInstallationTab(item);
        this.populateVariantsTab(item);
    }

    populateOverviewTab(item) {
        const content = document.getElementById('overviewContent');
        const overview = item.overview || {
            description: item.description,
            specifications: []
        };

        // Generate URLs for both drawing and manual (using first element from arrays)
        const drawingUrl = item.drawings && item.drawings.length > 0 ? getDrawingUrl(item.drawings[0]) : null;
        const manualUrl = item.manuals && item.manuals.length > 0 ? getManualUrl(item.manuals[0]) : null;
        
        // Generate image path using item ID
        const imagePath = `assets/${item.id}.png`;

        content.innerHTML = `
            <div class="overview-section">
                <div class="overview-image">
                    <img src="${imagePath}" 
                         alt="${item.name}" 
                         style="object-fit: cover; width: 100%; height: 100%;"
                         onerror="this.src='data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"200\" viewBox=\"0 0 300 200\"><rect width=\"300\" height=\"200\" fill=\"%23f8f9fa\" stroke=\"%23dee2e6\"/><text x=\"150\" y=\"100\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"16\" fill=\"%23666\">${item.name}</text></svg>
                </div>
                <div class="overview-text">
                    <h4>Description</h4>
                    <p>${overview.description}</p>
                    
                    <h4>Reference Documents</h4>
                    <div class="reference-links">
                        ${item.drawings && item.drawings.length > 0 ? `
                        <div class="reference-item">
                            <i class="fas fa-drafting-compass"></i>
                            <span>Canonical Drawing${item.drawings.length > 1 ? 's' : ''}: </span>
                            ${item.drawings.map(drawing => `
                                <a href="${getDrawingUrl(drawing)}" target="_blank" class="drawing-link" title="View HYD Standard Drawing">
                                    ${drawing.toUpperCase()}
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            `).join(' ')}
                        </div>
                        ` : ''}
                        ${item.manuals && item.manuals.length > 0 ? `
                        <div class="reference-item">
                            <i class="fas fa-book"></i>
                            <span>Manual${item.manuals.length > 1 ? 's' : ''}: </span>
                            ${item.manuals.map(manual => `
                                <a href="${getManualUrl(manual)}" target="_blank" class="manual-link" title="View Technical Manual">
                                    ${manual.toUpperCase()}
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            `).join(' ')}
                        </div>
                        ` : ''}
                    </div>
                    
                    ${overview.specifications && overview.specifications.length > 0 ? `
                    <h4>Specifications</h4>
                    <ul>
                        ${overview.specifications.map(spec => `<li>${spec}</li>`).join('')}
                    </ul>
                    ` : ''}
                </div>
            </div>
        `;
    }

    populateUsageTab(item) {
        const content = document.getElementById('usageContent');
        const usage = item.usage || {
            applications: ['General purpose applications'],
            conditions: ['Standard conditions']
        };

        content.innerHTML = `
            <div class="usage-section">
                <h4><i class="fas fa-map-marker-alt"></i> Applications</h4>
                <ul class="usage-list">
                    ${usage.applications.map(app => `<li>${app}</li>`).join('')}
                </ul>
                
                <h4><i class="fas fa-check-circle"></i> Suitable Conditions</h4>
                <ul class="conditions-list">
                    ${usage.conditions.map(condition => `<li>${condition}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    populateInstallationTab(item) {
        const content = document.getElementById('installationContent');
        
        // Check if item has composition (new structure) or installation (old structure)
        const hasComposition = item.composition;
        const hasInstallation = item.installation;
        
        if (hasComposition) {
            // New composition structure
            const composition = item.composition;
            content.innerHTML = `
                <div class="composition-section">
                    <h4><i class="fas fa-layer-group"></i> Composition</h4>
                    <ol class="composition-layers">
                        ${composition.layers.map(layer => `<li>${layer}</li>`).join('')}
                    </ol>
                    
                    <div class="composition-resources">
                        <div class="resource-group">
                            <h5><i class="fas fa-book"></i> Reference Drawings</h5>
                            <div class="manual-refs">
                                ${(composition.drawings || item.drawings || []).map(drawing => 
                                    `<span class="manual-tag">${drawing}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (hasInstallation) {
            // Legacy installation structure
            const installation = item.installation;
            content.innerHTML = `
                <div class="installation-section">
                    <h4><i class="fas fa-list-ol"></i> Installation Steps</h4>
                    <ol class="installation-steps">
                        ${installation.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                    
                    <div class="installation-resources">
                        <div class="resource-group">
                            <h5><i class="fas fa-book"></i> Reference Manuals</h5>
                            <div class="manual-refs">
                                ${(installation.manuals || installation.drawings || item.manuals || []).map(manual => 
                                    `<span class="manual-tag">${manual}</span>`
                                ).join('')}
                            </div>
                        </div>
                        
                        <div class="resource-group">
                            <h5><i class="fas fa-tools"></i> Required Tools</h5>
                            <ul class="tools-list">
                                ${installation.tools.map(tool => `<li>${tool}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="resource-group">
                            <h5><i class="fas fa-cubes"></i> Materials</h5>
                            <ul class="materials-list">
                                ${installation.materials.map(material => `<li>${material}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Fallback for items with no installation or composition data
            content.innerHTML = `
                <div class="installation-section">
                    <h4><i class="fas fa-info-circle"></i> Technical Information</h4>
                    <p>Refer to technical manual for detailed installation or composition information.</p>
                    
                    <div class="installation-resources">
                        <div class="resource-group">
                            <h5><i class="fas fa-book"></i> Reference Manuals</h5>
                            <div class="manual-refs">
                                ${(item.manuals || []).map(manual => 
                                    `<span class="manual-tag">${manual}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    populateVariantsTab(item) {
        const content = document.getElementById('variantsContent');
        const variants = item.variants || [{
            name: item.name,
            use: 'Standard application',
            manuals: item.manuals,
            drawings: item.drawings
        }];

        content.innerHTML = `
            <div class="variants-section">
                <h4><i class="fas fa-layer-group"></i> Available Variants</h4>
                <div class="variants-grid">
                    ${variants.map(variant => {
                        let referenceInfo = '';
                        
                        // Show drawings if available
                        if (variant.drawings && variant.drawings.length > 0) {
                            const drawingLinks = variant.drawings.map(drawing => {
                                const drawingUrl = getDrawingUrl(drawing);
                                return `<a href="${drawingUrl}" target="_blank" class="drawing-link" title="View HYD Standard Drawing"><span class="drawing-ref">${drawing}</span></a>`;
                            }).join(', ');
                            referenceInfo += `<p><strong>Drawing${variant.drawings.length > 1 ? 's' : ''}:</strong> ${drawingLinks}</p>`;
                        }
                        
                        // Show manuals if available
                        if (variant.manuals && variant.manuals.length > 0) {
                            const manualLinks = variant.manuals.map(manual => {
                                const manualUrl = getManualUrl(manual);
                                return `<a href="${manualUrl}" target="_blank" class="manual-link" title="View Technical Manual"><span class="manual-ref">${manual}</span></a>`;
                            }).join(', ');
                            referenceInfo += `<p><strong>Manual${variant.manuals.length > 1 ? 's' : ''}:</strong> ${manualLinks}</p>`;
                        }
                        
                        // Handle legacy single values (fallback)
                        if (!referenceInfo && variant.drawing) {
                            const drawingUrl = getDrawingUrl(variant.drawing);
                            referenceInfo += `<p><strong>Drawing:</strong> <a href="${drawingUrl}" target="_blank" class="drawing-link" title="View HYD Standard Drawing"><span class="drawing-ref">${variant.drawing}</span></a></p>`;
                        }
                        
                        if (!referenceInfo && variant.manual) {
                            const manualUrl = getManualUrl(variant.manual);
                            referenceInfo += `<p><strong>Manual:</strong> <a href="${manualUrl}" target="_blank" class="manual-link" title="View Technical Manual"><span class="manual-ref">${variant.manual}</span></a></p>`;
                        }
                        
                        // Fallback if no references are available
                        if (!referenceInfo) {
                            referenceInfo = `<p><strong>Reference:</strong> <span class="ref-fallback">No reference available</span></p>`;
                        }
                        
                        return `
                            <div class="variant-card">
                                <h5>${variant.name}</h5>
                                <p><strong>Use:</strong> ${variant.use}</p>
                                ${referenceInfo}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    showDetailPanel() {
        document.getElementById('detailPanel').classList.remove('hidden');
        // Keep main page scrollable when panel is shown
    }

    closeDetailPanel() {
        document.getElementById('detailPanel').classList.add('hidden');
        this.selectedItem = null;
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');
    }

    performSearch() {
        const query = document.getElementById('searchInput').value.trim();
        if (!query) {
            this.selectCategory('all');
            return;
        }

        const results = searchFurniture(query);
        this.displaySearchResults(results, query);
    }

    displaySearchResults(results, query) {
        const grid = document.getElementById('furnitureGrid');
        const breadcrumb = document.getElementById('breadcrumbText');
        
        breadcrumb.textContent = `Search Results for "${query}"`;
        
        // Update category selection
        document.querySelectorAll('.category-item').forEach(item => {
            item.classList.remove('active');
        });

        grid.innerHTML = '';
        
        if (results.length === 0) {
            grid.innerHTML = `<div class="no-items">No items found for "${query}".</div>`;
            return;
        }

        results.forEach(item => {
            const card = this.createItemCard(item);
            grid.appendChild(card);
        });
    }
}

// Initialize the application when DOM is loaded
let catalog;
document.addEventListener('DOMContentLoaded', () => {
    catalog = new RoadsideCatalog();
});
