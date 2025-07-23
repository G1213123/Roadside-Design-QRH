// Main application controller
class RoadsideCatalog {
    constructor() {
        this.currentCategory = 'all';
        this.currentView = 'catalog';
        this.selectedItem = null;
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
        const categoryNames = {
            'all': 'All Categories',
            'kerbs': 'Kerbs & Edges',
            'barriers': 'Crash Barriers',
            'railings': 'Railings & Fencing',
            'signs': 'Traffic Signs',
            'signals': 'Signal Equipment',
            'bollards': 'Traffic Bollards',
            'lighting': 'Street Lighting',
            'drainage': 'Drainage'
        };
        breadcrumb.textContent = `Home > ${categoryNames[category]}`;
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
        
        card.innerHTML = `
            <div class="card-image">
                <img src="assets/placeholder-${item.category}.png" alt="${item.name}" 
                     onerror="this.src='data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"150\" viewBox=\"0 0 200 150\"><rect width=\"200\" height=\"150\" fill=\"%23f0f0f0\"/><text x=\"100\" y=\"75\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" fill=\"%23666\">${item.drawing}</text></svg>'">
                <div class="card-overlay">
                    <span class="drawing-ref">${item.drawing}</span>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-description">${item.description}</p>
                <div class="card-meta">
                    <span class="manual-ref">
                        <i class="fas fa-book"></i> ${item.manual}
                    </span>
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
            specifications: [`Drawing Reference: ${item.drawing}`, `Manual: ${item.manual}`],
            image: null
        };

        content.innerHTML = `
            <div class="overview-section">
                <div class="overview-image">
                    <img src="${overview.image || `assets/detail-${item.category}.png`}" 
                         alt="${item.name}" 
                         onerror="this.src='data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"200\" viewBox=\"0 0 300 200\"><rect width=\"300\" height=\"200\" fill=\"%23f8f9fa\" stroke=\"%23dee2e6\"/><text x=\"150\" y=\"100\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"16\" fill=\"%23666\">${item.name}</text></svg>'">
                </div>
                <div class="overview-text">
                    <h4>Description</h4>
                    <p>${overview.description}</p>
                    <h4>Specifications</h4>
                    <ul>
                        ${overview.specifications.map(spec => `<li>${spec}</li>`).join('')}
                    </ul>
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
        const installation = item.installation || {
            steps: ['Refer to standard drawing for installation details'],
            drawings: [item.drawing],
            tools: ['Standard construction tools'],
            materials: ['As specified in drawing']
        };

        content.innerHTML = `
            <div class="installation-section">
                <h4><i class="fas fa-list-ol"></i> Installation Steps</h4>
                <ol class="installation-steps">
                    ${installation.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
                
                <div class="installation-resources">
                    <div class="resource-group">
                        <h5><i class="fas fa-drafting-compass"></i> Reference Drawings</h5>
                        <div class="drawing-refs">
                            ${installation.drawings.map(drawing => 
                                `<span class="drawing-tag">${drawing}</span>`
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
    }

    populateVariantsTab(item) {
        const content = document.getElementById('variantsContent');
        const variants = item.variants || [{
            name: item.name,
            use: 'Standard application',
            drawing: item.drawing
        }];

        content.innerHTML = `
            <div class="variants-section">
                <h4><i class="fas fa-layer-group"></i> Available Variants</h4>
                <div class="variants-grid">
                    ${variants.map(variant => `
                        <div class="variant-card">
                            <h5>${variant.name}</h5>
                            <p><strong>Use:</strong> ${variant.use}</p>
                            <p><strong>Drawing:</strong> <span class="drawing-ref">${variant.drawing}</span></p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    showDetailPanel() {
        document.getElementById('detailPanel').classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    closeDetailPanel() {
        document.getElementById('detailPanel').classList.add('hidden');
        document.body.style.overflow = 'auto';
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
