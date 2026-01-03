// Color palette for top 10
const rankColors = [
    { color: '#667eea', dark: '#764ba2' }, // Purple
    { color: '#f093fb', dark: '#f5576c' }, // Pink
    { color: '#4facfe', dark: '#00f2fe' }, // Blue
    { color: '#43e97b', dark: '#38f9d7' }, // Green
    { color: '#fa709a', dark: '#fee140' }, // Orange
    { color: '#30cfd0', dark: '#330867' }, // Teal
    { color: '#a8edea', dark: '#fed6e3' }, // Cyan
    { color: '#ff9a56', dark: '#ff6a88' }, // Coral
    { color: '#fbc2eb', dark: '#a6c1ee' }, // Lavender
    { color: '#fdcbf1', dark: '#e6dee9' }  // Rose
];

// Casino data
const casinos = [
    {
        id: 1,
        rank: 1,
        name: "Crown Coins",
        logoText: "👑",
        tagline: "Best for new player bonuses",
        rating: 4.8,
        videoUrl: "#",
        author: {
            name: "Alexander Korsager",
            initials: "AK",
            title: "Chief Gaming Officer",
            reviews: 158,
            verified: true,
            photo: "https://i.pravatar.cc/150?img=12"
        },
        review: "I've found that Crown Coins is the best sweepstakes casino for new player bonuses with 100,000 Crown Coins and 2 Sweeps Coins up for grabs just for signing up, matching the most generous offers from RealPrize and Casino.Click.",
        bonus: {
            title: "Get 200% More Coins on First Purchase",
            amount: "1.5 Million CC + 75 SC"
        },
        pros: [
            "100k + 2 SC no deposit bonus - ranked among the best available",
            "iOS app available with an impressive 4.7/5 and 45k user ratings"
        ],
        cons: [
            "Minimum withdrawal is high at 50 Sweeps Coins - equivalent to $50"
        ],
        stats: {
            minPurchase: "Free",
            payout: "0-3 days",
            yearFounded: "2023",
            banking: ["S", "E", "+6"]
        },
        newGames: [
            {
                name: "Tasty Bonanza 10,000",
                rtp: "96.10%",
                image: "https://images.unsplash.com/photo-1597933534023-8e9a3c3d9b5e?w=200&h=120&fit=crop",
                description: "Tasty Bonanza is a candy-themed 6x5 \"Pay Anywhere\" slot from Booming Games with cascading reels, $0.20–$60 bets, 96.10% RTP, and a high-volatility top win of 6,500x. Wins come from 8–12+ matching symbols anywhere on the reels, and free spins are triggered by a Candy Jar collector, can retrigger, and add multiplier symbols."
            },
            {
                name: "Jewel Boom Super Drop",
                rtp: "94.45%",
                image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=120&fit=crop",
                description: "An explosive gem-themed slot featuring cascading wins and progressive multipliers. Match 3+ symbols to trigger the Super Drop feature with increasing win multipliers up to 10x. Medium-high volatility with $0.10–$50 betting range."
            },
            {
                name: "Cleopatra Wild",
                rtp: "95.15%",
                image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=200&h=120&fit=crop",
                description: "Ancient Egypt meets modern slots in this 5x3 classic with 20 paylines. Features expanding wilds, free spins with 3x multipliers, and a top win of 10,000x. Low-medium volatility perfect for extended play sessions with $0.20–$100 bets."
            }
        ],
        promotion: {
            title: "GC Winners Weekly",
            subtitle: "$50,000 Prize Pool",
            description: "Play your favorite games and win big! Top 100 players share the prize pool every week.",
            prizes: [
                { place: "1st", amount: "$10,000" },
                { place: "2nd", amount: "$5,000" },
                { place: "3rd", amount: "$2,500" }
            ],
            endDate: "Ends Sunday 11:59 PM EST"
        },
        recentPlayers: 11,
        timeframe: "24 hours"
    },
    {
        id: 2,
        rank: 2,
        name: "Stake.us",
        logoText: "💎",
        tagline: "Best for crypto enthusiasts",
        rating: 4.7,
        videoUrl: "#",
        author: {
            name: "Sarah Chen",
            initials: "SC",
            title: "Senior Casino Analyst",
            reviews: 203,
            verified: true,
            photo: "https://i.pravatar.cc/150?img=5"
        },
        review: "Stake.us stands out as one of the premier sweepstakes casinos, especially for players who prefer cryptocurrency. With an impressive game library of over 1,200 titles and lightning-fast payouts, it's become my go-to recommendation for experienced players.",
        bonus: {
            title: "Welcome Package",
            amount: "250,000 Gold Coins + $25 Stake Cash"
        },
        pros: [
            "Massive game library with 1,200+ titles including exclusive originals",
            "Crypto-friendly with instant deposits and fast withdrawals",
            "Active community and generous daily bonuses"
        ],
        cons: [
            "Interface can be overwhelming for beginners",
            "Limited customer support hours"
        ],
        stats: {
            minPurchase: "$10",
            payout: "1-2 days",
            yearFounded: "2022",
            banking: ["C", "B", "+4"]
        },
        newGames: [
            {
                name: "Tasty Bonanza 10,000",
                rtp: "96.10%",
                image: "https://images.unsplash.com/photo-1597933534023-8e9a3c3d9b5e?w=200&h=120&fit=crop",
                description: "Tasty Bonanza is a candy-themed 6x5 \"Pay Anywhere\" slot from Booming Games with cascading reels, $0.20–$60 bets, 96.10% RTP, and a high-volatility top win of 6,500x. Wins come from 8–12+ matching symbols anywhere on the reels, and free spins are triggered by a Candy Jar collector, can retrigger, and add multiplier symbols."
            },
            {
                name: "Jewel Boom Super Drop",
                rtp: "94.45%",
                image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=120&fit=crop",
                description: "An explosive gem-themed slot featuring cascading wins and progressive multipliers. Match 3+ symbols to trigger the Super Drop feature with increasing win multipliers up to 10x. Medium-high volatility with $0.10–$50 betting range."
            },
            {
                name: "Cleopatra Wild",
                rtp: "95.15%",
                image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=200&h=120&fit=crop",
                description: "Ancient Egypt meets modern slots in this 5x3 classic with 20 paylines. Features expanding wilds, free spins with 3x multipliers, and a top win of 10,000x. Low-medium volatility perfect for extended play sessions with $0.20–$100 bets."
            }
        ],
        recentPlayers: 28,
        timeframe: "24 hours"
    },
    {
        id: 3,
        rank: 3,
        name: "Pulsz Casino",
        logoText: "⚡",
        tagline: "Best for slot enthusiasts",
        rating: 4.6,
        videoUrl: "#",
        author: {
            name: "Michael Torres",
            initials: "MT",
            title: "Lead Gaming Reviewer",
            reviews: 142,
            verified: true,
            photo: "https://i.pravatar.cc/150?img=7"
        },
        review: "Pulsz Casino has established itself as a top-tier destination for slot lovers. The platform offers an exceptional selection of premium slots from leading providers, combined with one of the most generous welcome packages in the industry.",
        bonus: {
            title: "New Player Bonus",
            amount: "367,000 Gold Coins + 32.3 Sweeps Coins"
        },
        pros: [
            "Extensive slot collection with 650+ premium titles",
            "User-friendly interface perfect for beginners",
            "Reliable customer support with quick response times"
        ],
        cons: [
            "Limited table game selection compared to competitors",
            "Slower payout processing than industry leaders"
        ],
        stats: {
            minPurchase: "$5",
            payout: "2-3 days",
            yearFounded: "2020",
            banking: ["V", "P", "+5"]
        },
        promotion: {
            title: "Slot Tournament Spectacular",
            subtitle: "$25,000 Weekly Prizes",
            description: "Spin to win! Compete against other players for your share of massive weekly prizes.",
            prizes: [
                { place: "1st", amount: "$5,000" },
                { place: "2nd", amount: "$2,500" },
                { place: "3rd", amount: "$1,000" }
            ],
            endDate: "Ends Friday 11:59 PM EST"
        },
        recentPlayers: 19,
        timeframe: "24 hours"
    }
];

// Create casino card with new design
function createCasinoCard(casino) {
    const colors = rankColors[casino.rank - 1] || rankColors[0];

    return `
        <article class="casino-card" style="--card-color: ${colors.color}; --card-color-dark: ${colors.dark}">
            <div class="casino-content">
                <!-- Title with Logo & Rank -->
                <div class="casino-title-row">
                    <div class="casino-logo">${casino.logoText}</div>
                    <div class="casino-title">
                        <h3 class="casino-name"><span class="rank-number">${casino.rank}.</span> ${casino.name}</h3>
                        <p class="casino-tagline">${casino.tagline}</p>
                    </div>
                    <div class="rating-section">
                        <div class="rating-label">
                            Sweepsy Expert Score
                            <span class="tooltip-trigger">
                                i
                                <span class="tooltip-content">Sweepsy scores are objectively determined by our editorial team. Welcome bonuses, payout speeds, game variety, minimum purchase requirements, and customer support quality are some of the factors that make up Sweepsy's expert score.</span>
                            </span>
                        </div>
                        <div class="rating-badge">
                            <span class="star-icon">★</span>
                            <span>${casino.rating}</span>
                        </div>
                    </div>
                </div>

                <!-- Author Quote -->
                <div class="author-quote-section">
                    <div class="quote-icon">"</div>
                    <div class="author-header">
                        <div class="author-photo">${casino.author.initials}</div>
                        <div class="author-info">
                            <div class="author-name">
                                ${casino.author.verified ? '<span class="verified">✓</span>' : ''}
                                ${casino.author.name}
                            </div>
                            <div class="author-meta">${casino.author.title} · ${casino.author.reviews} reviews</div>
                        </div>
                        <a href="${casino.videoUrl}" class="video-review-link" title="Watch video review">
                            <svg class="video-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
                            </svg>
                            Video Review
                        </a>
                    </div>
                    <p class="quote-text">
                        ${casino.review}
                        <span class="read-more">Show more</span>
                    </p>
                </div>

                ${casino.newGames ? `
                <!-- New Games Section -->
                <div class="new-games-section">
                    <div class="section-header">
                        <span class="new-badge">NEW</span>
                        <h4>New Games This Week</h4>
                    </div>
                    <div class="games-list">
                        ${casino.newGames.map(game => `
                            <div class="game-item">
                                <img src="${game.image}" alt="${game.name}" class="game-thumbnail" loading="lazy">
                                <div class="game-info">
                                    <span class="game-name">${game.name}</span>
                                    <span class="game-rtp">RTP: ${game.rtp}</span>
                                    <p class="game-description">${game.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                ${casino.promotion ? `
                <!-- Promotion Section -->
                <div class="promotion-section">
                    <div class="promo-header">
                        <div class="promo-badge">🎁 ACTIVE PROMO</div>
                        <h4 class="promo-title">${casino.promotion.title}</h4>
                        <div class="promo-subtitle">${casino.promotion.subtitle}</div>
                    </div>
                    <p class="promo-description">${casino.promotion.description}</p>
                    <div class="prize-grid">
                        ${casino.promotion.prizes.map(prize => `
                            <div class="prize-item">
                                <div class="prize-place">${prize.place}</div>
                                <div class="prize-amount">${prize.amount}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="promo-footer">
                        <span class="promo-deadline">⏰ ${casino.promotion.endDate}</span>
                        <button class="promo-cta">Join Now</button>
                    </div>
                </div>
                ` : ''}

                <!-- Bonus -->
                <div class="bonus-highlight">
                    <div class="bonus-label">
                        <span>🎁</span>
                        <span>Welcome Bonus</span>
                    </div>
                    <div class="bonus-amount">${casino.bonus.title} - ${casino.bonus.amount}</div>
                    <div class="bonus-terms">Terms & Conditions Apply</div>
                </div>

                <!-- Pros & Cons -->
                <div class="info-grid">
                    <div class="info-section">
                        <h4>Pros</h4>
                        <ul class="info-list pros-list">
                            ${casino.pros.map(pro => `<li>${pro}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="info-section">
                        <h4>Cons</h4>
                        <ul class="info-list cons-list">
                            ${casino.cons.map(con => `<li>${con}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <!-- Stats -->
                <div class="stats-bar">
                    <div class="stat">
                        <div class="stat-label">Min Purchase</div>
                        <div class="stat-value">${casino.stats.minPurchase}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">Payout Speed</div>
                        <div class="stat-value">${casino.stats.payout}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">Year Launched</div>
                        <div class="stat-value">${casino.stats.yearFounded}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">Banking</div>
                        <div class="banking-icons">
                            ${casino.stats.banking.map(bank =>
                                bank.startsWith('+')
                                    ? `<span class="more-count">${bank}</span>`
                                    : `<div class="banking-icon">${bank}</div>`
                            ).join('')}
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="card-footer">
                    <div class="action-buttons">
                        <button class="btn btn-primary">Visit Site</button>
                        <button class="btn btn-secondary">Read Review</button>
                    </div>
                    <div class="recent-activity">
                        <span class="activity-icon">🔥</span>
                        <span><span class="activity-highlight">${casino.recentPlayers}</span> players in the past ${casino.timeframe}</span>
                    </div>
                </div>
            </div>
        </article>
    `;
}

// Render all casinos
function renderCasinos() {
    const container = document.getElementById('casinosList');
    if (!container) return;

    container.innerHTML = casinos.map(casino => createCasinoCard(casino)).join('');

    // Add click handlers for "Show more" links
    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const quoteText = this.closest('.quote-text');
            if (quoteText) {
                if (this.textContent === 'Show more') {
                    quoteText.style.maxHeight = 'none';
                    this.textContent = 'Show less';
                } else {
                    quoteText.style.maxHeight = '';
                    this.textContent = 'Show more';
                }
            }
        });
    });

    // Add click handlers for buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.casino-card');
            const casinoName = card.querySelector('.casino-name').textContent;
            console.log('Visit site clicked for:', casinoName);
            // Add actual navigation logic here
        });
    });

    document.querySelectorAll('.btn-secondary').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.casino-card');
            const casinoName = card.querySelector('.casino-name').textContent;
            console.log('More details clicked for:', casinoName);
            // Add actual navigation logic here
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderCasinos);

// Optional: Add intersection observer for lazy loading on scroll
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe cards after they're rendered
    setTimeout(() => {
        document.querySelectorAll('.casino-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            observer.observe(card);
        });
    }, 100);
}
