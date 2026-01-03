/**
 * World-Class Sweepstakes Casino Listing
 * Designed with principles from Airbnb, Stripe, and Apple
 *
 * Features:
 * - Premium card animations with staggered entrance
 * - Dark mode support with system preference detection
 * - Smooth micro-interactions
 * - Accessible focus states
 * - Performance-optimized rendering
 */

// Enhanced color palette for premium gradient treatments
const rankColors = [
    { color: '#6366F1', dark: '#4F46E5', name: 'Indigo' },      // Rank 1 - Premium indigo
    { color: '#EC4899', dark: '#DB2777', name: 'Pink' },        // Rank 2 - Vibrant pink
    { color: '#0EA5E9', dark: '#0284C7', name: 'Sky' },         // Rank 3 - Sky blue
    { color: '#10B981', dark: '#059669', name: 'Emerald' },     // Rank 4 - Emerald green
    { color: '#F59E0B', dark: '#D97706', name: 'Amber' },       // Rank 5 - Warm amber
    { color: '#8B5CF6', dark: '#7C3AED', name: 'Violet' },      // Rank 6 - Royal violet
    { color: '#06B6D4', dark: '#0891B2', name: 'Cyan' },        // Rank 7 - Cyan
    { color: '#F97316', dark: '#EA580C', name: 'Orange' },      // Rank 8 - Orange
    { color: '#14B8A6', dark: '#0D9488', name: 'Teal' },        // Rank 9 - Teal
    { color: '#EF4444', dark: '#DC2626', name: 'Red' }          // Rank 10 - Red
];

// Comprehensive casino data with enhanced structure
const casinos = [
    {
        id: 1,
        rank: 1,
        name: "Crown Coins",
        logoText: "👑",
        tagline: "Best for new player bonuses",
        rating: 4.8,
        ratingBreakdown: {
            bonus: 5.0,
            games: 4.7,
            payout: 4.8,
            support: 4.6
        },
        videoUrl: "#",
        author: {
            name: "Alexander Korsager",
            initials: "AK",
            title: "Chief Gaming Officer",
            reviews: 158,
            verified: true,
            yearsExperience: 12,
            photo: "https://i.pravatar.cc/150?img=12"
        },
        review: "I've found that Crown Coins is the best sweepstakes casino for new player bonuses with 100,000 Crown Coins and 2 Sweeps Coins up for grabs just for signing up, matching the most generous offers from RealPrize and Casino.Click.",
        fullReview: "The platform excels in user experience with a clean, intuitive interface that makes navigation effortless. Their game selection includes over 800 titles from premium providers, and the payout process is remarkably smooth with most redemptions processed within 24-48 hours.",
        bonus: {
            title: "Get 200% More Coins on First Purchase",
            amount: "1.5 Million CC + 75 SC",
            code: "CROWN200"
        },
        pros: [
            "100k + 2 SC no deposit bonus - ranked among the best available",
            "iOS app available with an impressive 4.7/5 and 45k user ratings",
            "800+ games from top-tier providers"
        ],
        cons: [
            "Minimum withdrawal is high at 50 Sweeps Coins - equivalent to $50",
            "No Android app currently available"
        ],
        stats: {
            minPurchase: "Free",
            payout: "0-3 days",
            yearFounded: "2023",
            totalGames: "800+",
            banking: ["Skrill", "ecoPayz", "+6"]
        },
        newGames: [
            {
                name: "Tasty Bonanza 10,000",
                rtp: "96.10%",
                volatility: "High",
                provider: "Booming Games",
                image: "https://www.sweepsy.com/wp-content/uploads/2025/12/Bad-Santa-RealPrize.jpg",
                description: "Tasty Bonanza is a candy-themed 6x5 \"Pay Anywhere\" slot from Booming Games with cascading reels, $0.20-$60 bets, 96.10% RTP, and a high-volatility top win of 6,500x. Wins come from 8-12+ matching symbols anywhere on the reels, and free spins are triggered by a Candy Jar collector."
            },
            {
                name: "Jewel Boom Super Drop",
                rtp: "94.45%",
                volatility: "Medium-High",
                provider: "Pragmatic Play",
                image: "https://www.sweepsy.com/wp-content/uploads/2025/12/Christmas-Bonanza-Megaways-SweepNext.jpg",
                description: "An explosive gem-themed slot featuring cascading wins and progressive multipliers. Match 3+ symbols to trigger the Super Drop feature with increasing win multipliers up to 10x."
            },
            {
                name: "Cleopatra Wild",
                rtp: "95.15%",
                volatility: "Low-Medium",
                provider: "IGT",
                image: "https://www.sweepsy.com/wp-content/uploads/2025/12/Christmas-fortune-crown-coins.jpg",
                description: "Ancient Egypt meets modern slots in this 5x3 classic with 20 paylines. Features expanding wilds, free spins with 3x multipliers, and a top win of 10,000x."
            }
        ],
        recentPlayers: 11,
        timeframe: "24 hours",
        trustIndicators: ["Licensed", "SSL Secured", "Responsible Gaming"]
    },
    {
        id: 2,
        rank: 2,
        name: "Stake.us",
        logoText: "💎",
        tagline: "Best for crypto enthusiasts",
        rating: 4.7,
        ratingBreakdown: {
            bonus: 4.5,
            games: 4.9,
            payout: 4.8,
            support: 4.6
        },
        videoUrl: "#",
        author: {
            name: "Sarah Chen",
            initials: "SC",
            title: "Senior Casino Analyst",
            reviews: 203,
            verified: true,
            yearsExperience: 8,
            photo: "https://i.pravatar.cc/150?img=5"
        },
        review: "Stake.us stands out as one of the premier sweepstakes casinos, especially for players who prefer cryptocurrency. With an impressive game library of over 1,200 titles and lightning-fast payouts, it's become my go-to recommendation for experienced players.",
        fullReview: "What sets Stake.us apart is their commitment to innovation. They regularly add new exclusive games, host community events, and maintain one of the most active Discord communities in the space. The VIP program is particularly rewarding for consistent players.",
        bonus: {
            title: "Welcome Package",
            amount: "250,000 Gold Coins + $25 Stake Cash",
            code: "STAKE25"
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
            totalGames: "1,200+",
            banking: ["Crypto", "Bank", "+4"]
        },
        promotion: {
            title: "GC Winners Weekly",
            subtitle: "$50,000 Prize Pool",
            description: "Play your favorite games and win big! Top 100 players share the prize pool every week.",
            prizes: [
                { place: "1st", amount: "$10,000" },
                { place: "2nd", amount: "$5,000" },
                { place: "3rd", amount: "$2,500" }
            ],
            endDate: "Ends Sunday 11:59 PM"
        },
        recentPlayers: 28,
        timeframe: "24 hours",
        trustIndicators: ["Licensed", "Crypto Verified", "24/7 Support"]
    },
    {
        id: 3,
        rank: 3,
        name: "Pulsz Casino",
        logoText: "⚡",
        tagline: "Best for slot enthusiasts",
        rating: 4.6,
        ratingBreakdown: {
            bonus: 4.8,
            games: 4.7,
            payout: 4.3,
            support: 4.5
        },
        videoUrl: "#",
        author: {
            name: "Michael Torres",
            initials: "MT",
            title: "Lead Gaming Reviewer",
            reviews: 142,
            verified: true,
            yearsExperience: 6,
            photo: "https://i.pravatar.cc/150?img=7"
        },
        review: "Pulsz Casino has established itself as a top-tier destination for slot lovers. The platform offers an exceptional selection of premium slots from leading providers, combined with one of the most generous welcome packages in the industry.",
        fullReview: "Beyond slots, Pulsz excels in creating a premium user experience. The site loads quickly, games run smoothly, and the mobile experience is nearly flawless. Their customer support team is knowledgeable and responsive.",
        bonus: {
            title: "New Player Bonus",
            amount: "367,000 Gold Coins + 32.3 SC",
            code: "PULSZ367"
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
            totalGames: "650+",
            banking: ["Visa", "PayPal", "+5"]
        },
        newGames: [
            {
                name: "Mystic Fortune Deluxe",
                rtp: "96.50%",
                volatility: "High",
                provider: "NetEnt",
                image: "https://www.sweepsy.com/wp-content/uploads/2025/12/Bad-Santa-RealPrize.jpg",
                description: "Journey into a realm of magic with this enchanting 5x4 slot featuring mystical symbols and an innovative bonus buy feature."
            },
            {
                name: "Dragon's Treasure Quest",
                rtp: "95.80%",
                volatility: "Medium",
                provider: "Microgaming",
                image: "https://www.sweepsy.com/wp-content/uploads/2025/12/Christmas-Bonanza-Megaways-SweepNext.jpg",
                description: "Embark on an epic adventure to claim the dragon's hoard. Features expanding wilds and a progressive jackpot system."
            },
            {
                name: "Neon Rush 2026",
                rtp: "94.90%",
                volatility: "Very High",
                provider: "Pragmatic Play",
                image: "https://www.sweepsy.com/wp-content/uploads/2025/12/Christmas-fortune-crown-coins.jpg",
                description: "A futuristic cyberpunk-themed slot with stunning visuals, 4,096 ways to win, and a max win potential of 15,000x."
            }
        ],
        promotion: {
            title: "Slot Tournament Spectacular",
            subtitle: "$25,000 Weekly Prizes",
            description: "Spin to win! Compete against other players for your share of massive weekly prizes.",
            prizes: [
                { place: "1st", amount: "$5,000" },
                { place: "2nd", amount: "$2,500" },
                { place: "3rd", amount: "$1,000" }
            ],
            endDate: "Ends Friday 11:59 PM"
        },
        recentPlayers: 19,
        timeframe: "24 hours",
        trustIndicators: ["Licensed", "Verified Payouts", "SSL Secured"]
    }
];

/**
 * Generate SVG icons for better visual consistency
 */
const icons = {
    play: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
    </svg>`,
    check: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    arrow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    fire: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2zm-1-12.06c-2.17 2.6-3 4.66-3 6.06 0 2.08 1.71 3.5 3.5 3.5s3.5-1.42 3.5-3.5c0-1.4-.83-3.46-3-6.06-.42.51-.81 1.02-1 1.26v-.01z"/>
    </svg>`,
    gift: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    clock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`
};

/**
 * Create enhanced casino card with world-class design
 */
function createCasinoCard(casino) {
    const colors = rankColors[casino.rank - 1] || rankColors[0];

    // Truncate review for initial display
    const truncatedReview = casino.review.length > 200
        ? casino.review.substring(0, 200) + '...'
        : casino.review;

    return `
        <article class="casino-card" style="--card-color: ${colors.color}; --card-color-dark: ${colors.dark}" data-casino-id="${casino.id}">
            <div class="casino-content">
                <!-- Header: Logo, Title & Rating -->
                <div class="casino-title-row">
                    <div class="casino-logo" aria-label="${casino.name} logo">${casino.logoText}</div>
                    <div class="casino-title">
                        <h3 class="casino-name">
                            <span class="rank-number">${casino.rank}.</span> ${casino.name}
                        </h3>
                        <p class="casino-tagline">${casino.tagline}</p>
                    </div>
                    <div class="rating-section">
                        <div class="rating-label">
                            <span>Expert Score</span>
                            <span class="tooltip-trigger" role="button" aria-label="Rating explanation" tabindex="0">
                                i
                                <span class="tooltip-content" role="tooltip">
                                    <strong>How we rate:</strong> Our expert scores are based on welcome bonuses, payout speeds, game variety, minimum purchase requirements, and customer support quality.
                                </span>
                            </span>
                        </div>
                        <div class="rating-badge">
                            <span class="star-icon" aria-hidden="true">&#9733;</span>
                            <span>${casino.rating.toFixed(1)}</span>
                        </div>
                    </div>
                </div>

                <!-- Expert Review Section -->
                <div class="author-quote-section">
                    <div class="quote-icon" aria-hidden="true">"</div>
                    <div class="review-header">
                        <div class="our-take-badge">Expert Review</div>
                        <div class="author-content">
                            <div class="author-photo" aria-hidden="true">${casino.author.initials}</div>
                            <div class="author-details">
                                <div class="author-name">
                                    ${casino.author.verified ? `<span class="verified" aria-label="Verified expert">${icons.check}</span>` : ''}
                                    ${casino.author.name}
                                </div>
                                <div class="author-meta">${casino.author.title} &middot; ${casino.author.reviews} reviews</div>
                            </div>
                        </div>
                        <a href="${casino.videoUrl}" class="video-link" aria-label="Watch video review of ${casino.name}">
                            <span class="video-icon" aria-hidden="true">${icons.play}</span>
                            <span class="video-link-full">Watch Review</span>
                            <span class="video-link-mobile">Watch</span>
                        </a>
                    </div>
                    <p class="quote-text" data-full-text="${casino.review} ${casino.fullReview || ''}">
                        ${truncatedReview}
                        ${casino.review.length > 200 ? '<span class="read-more" role="button" tabindex="0">Read more</span>' : ''}
                    </p>
                </div>


                <!-- Welcome Bonus -->
                <div class="bonus-highlight">
                    <div class="bonus-label">
                        <span aria-hidden="true">${icons.gift}</span>
                        <span>Welcome Bonus</span>
                    </div>
                    <div class="bonus-amount">${casino.bonus.title} - ${casino.bonus.amount}</div>
                    <div class="bonus-terms" role="button" tabindex="0">Terms & Conditions Apply</div>
                </div>

                <!-- Pros & Cons -->
                <div class="info-grid">
                    <div class="info-section">
                        <h4>What We Like</h4>
                        <ul class="info-list pros-list">
                            ${casino.pros.map(pro => `<li>${pro}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="info-section">
                        <h4>Room for Improvement</h4>
                        <ul class="info-list cons-list">
                            ${casino.cons.map(con => `<li>${con}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <!-- Key Stats -->
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
                        <div class="stat-label">Launched</div>
                        <div class="stat-value">${casino.stats.yearFounded}</div>
                    </div>
                    <div class="stat">
                        <div class="stat-label">Banking</div>
                        <div class="banking-icons">
                            ${casino.stats.banking.map(bank =>
                                bank.startsWith('+')
                                    ? `<span class="more-count">${bank}</span>`
                                    : `<div class="banking-icon" title="${bank}">${bank.charAt(0)}</div>`
                            ).join('')}
                        </div>
                    </div>
                </div>

                <!-- Action Footer -->
                <div class="card-footer">
                    <div class="action-buttons">
                        <button class="btn btn-primary" data-action="visit" data-casino="${casino.name}">
                            Visit Site
                            <span aria-hidden="true">${icons.arrow}</span>
                        </button>
                        <button class="btn btn-secondary" data-action="review" data-casino="${casino.name}">
                            Full Review
                        </button>
                    </div>
                    <div class="recent-activity">
                        <span class="activity-icon" aria-hidden="true">${icons.fire}</span>
                        <span>
                            <span class="activity-highlight">${casino.recentPlayers}</span>
                            players joined in the past ${casino.timeframe}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    `;
}

/**
 * Render Top Games for January section
 */
function renderTopGames() {
    const container = document.getElementById('topGamesSection');
    if (!container) return;

    // Collect all games from all casinos
    const allGames = [];
    casinos.forEach(casino => {
        if (casino.newGames) {
            casino.newGames.forEach(game => {
                allGames.push({ ...game, casinoName: casino.name });
            });
        }
    });

    const gamesHTML = `
        <section class="top-games-section">
            <h2 class="section-title">Top Games for January</h2>
            <div class="games-grid">
                ${allGames.map((game, index) => `
                    <div class="game-card" data-game-index="${index}" role="button" tabindex="0" aria-expanded="false">
                        <div class="game-image-wrapper">
                            <img src="${game.image}" alt="${game.name} slot game preview" class="game-image" loading="lazy">
                        </div>
                        <div class="game-info-compact">
                            <div class="game-info-left">
                                <h5 class="game-title">${game.name}</h5>
                                <span class="game-rtp-compact">RTP: ${game.rtp}</span>
                            </div>
                            <button class="game-tap-indicator" aria-label="Tap for game details">
                                Tap for details
                            </button>
                        </div>
                        <div class="game-description-hidden">
                            <p>${game.description}</p>
                            <a href="#" class="game-play-link" data-casino="${game.casinoName}">
                                Play at ${game.casinoName} →
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;

    container.innerHTML = gamesHTML;

    // Re-attach game card interactions for this section
    container.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', handleGameCardClick);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleGameCardClick.call(card, e);
            }
        });
    });
}

/**
 * Render Top Promos for January section
 */
function renderTopPromos() {
    const container = document.getElementById('topPromosSection');
    if (!container) return;

    // Collect all promotions from all casinos
    const allPromos = [];
    casinos.forEach(casino => {
        if (casino.promotion) {
            allPromos.push({ ...casino.promotion, casinoName: casino.name, casinoLogo: casino.logoText });
        }
    });

    const promosHTML = `
        <section class="top-promos-section">
            <h2 class="section-title">Top Promos for January</h2>
            <div class="promos-grid">
                ${allPromos.map((promo, index) => `
                    <div class="promotion-card">
                        <div class="promo-header">
                            <div class="promo-casino-badge">
                                <span class="promo-casino-logo">${promo.casinoLogo}</span>
                                <span class="promo-casino-name">${promo.casinoName}</span>
                            </div>
                            <div class="promo-badge">
                                <span aria-hidden="true">${icons.gift}</span>
                                ACTIVE PROMO
                            </div>
                        </div>
                        <h4 class="promo-title">${promo.title}</h4>
                        <div class="promo-subtitle">${promo.subtitle}</div>
                        <p class="promo-description">${promo.description}</p>
                        <div class="prize-grid">
                            ${promo.prizes.map(prize => `
                                <div class="prize-item">
                                    <div class="prize-place">${prize.place}</div>
                                    <div class="prize-amount">${prize.amount}</div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="promo-footer">
                            <span class="promo-deadline">
                                <span aria-hidden="true">${icons.clock}</span>
                                ${promo.endDate}
                            </span>
                            <button class="promo-cta" data-casino="${promo.casinoName}">Join at ${promo.casinoName}</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;

    container.innerHTML = promosHTML;
}

/**
 * Render all casino cards with staggered animation
 */
function renderCasinos() {
    const container = document.getElementById('casinosList');
    if (!container) return;

    // Clear and render
    container.innerHTML = casinos.map(casino => createCasinoCard(casino)).join('');

    // Initialize interactions
    initializeInteractions();
}

/**
 * Initialize all interactive elements
 */
function initializeInteractions() {
    // Read more toggle
    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', handleReadMore);
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleReadMore.call(link, e);
            }
        });
    });

    // Game card expansion
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', handleGameCardClick);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleGameCardClick.call(card, e);
            }
        });
    });

    // Button click handlers
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('click', handleButtonClick);
    });

    // Promo CTA handlers
    document.querySelectorAll('.promo-cta').forEach(btn => {
        btn.addEventListener('click', handlePromoClick);
    });

    // Tooltip keyboard accessibility
    document.querySelectorAll('.tooltip-trigger').forEach(trigger => {
        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                trigger.focus();
            }
        });
    });
}

/**
 * Handle read more click
 */
function handleReadMore(e) {
    e.preventDefault();
    const quoteText = this.closest('.quote-text');
    if (!quoteText) return;

    const fullText = quoteText.dataset.fullText;
    const isExpanded = this.textContent === 'Show less';

    if (isExpanded) {
        const truncated = fullText.substring(0, 200) + '...';
        quoteText.innerHTML = `${truncated}<span class="read-more" role="button" tabindex="0">Read more</span>`;
    } else {
        quoteText.innerHTML = `${fullText}<span class="read-more" role="button" tabindex="0">Show less</span>`;
    }

    // Reinitialize the new read more link
    const newLink = quoteText.querySelector('.read-more');
    if (newLink) {
        newLink.addEventListener('click', handleReadMore);
        newLink.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleReadMore.call(newLink, e);
            }
        });
    }
}

/**
 * Handle game card click for expansion
 */
function handleGameCardClick() {
    const isExpanded = this.classList.contains('expanded');

    // Close all other expanded cards in the same section
    const section = this.closest('.games-grid');
    section.querySelectorAll('.game-card.expanded').forEach(card => {
        if (card !== this) {
            card.classList.remove('expanded');
            card.setAttribute('aria-expanded', 'false');
        }
    });

    // Toggle current card
    this.classList.toggle('expanded');
    this.setAttribute('aria-expanded', !isExpanded);
}

/**
 * Handle main button clicks
 */
function handleButtonClick(e) {
    const action = this.dataset.action;
    const casinoName = this.dataset.casino;

    // Add click animation
    this.style.transform = 'scale(0.96)';
    setTimeout(() => {
        this.style.transform = '';
    }, 150);

    console.log(`${action} clicked for: ${casinoName}`);

    // Here you would add actual navigation or modal opening logic
    if (action === 'visit') {
        // window.location.href = `/casino/${casinoName.toLowerCase().replace(/\s+/g, '-')}`;
    } else if (action === 'review') {
        // openReviewModal(casinoName);
    }
}

/**
 * Handle promo CTA clicks
 */
function handlePromoClick() {
    const promoSection = this.closest('.promotion-section');
    const card = this.closest('.casino-card');
    const casinoId = card?.dataset.casinoId;

    this.textContent = 'Joining...';
    this.disabled = true;

    // Simulate API call
    setTimeout(() => {
        this.textContent = 'Joined!';
        setTimeout(() => {
            this.textContent = 'Join Tournament';
            this.disabled = false;
        }, 2000);
    }, 1000);
}

/**
 * Dark mode toggle functionality
 */
function initDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    if (!toggle) return;

    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggle.checked = true;
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
                toggle.checked = true;
            } else {
                document.documentElement.removeAttribute('data-theme');
                toggle.checked = false;
            }
        }
    });
}

/**
 * Initialize scroll-based animations using Intersection Observer
 */
function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all casino cards
    document.querySelectorAll('.casino-card').forEach((card, index) => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
}

/**
 * Performance optimization: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Initialize everything when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    renderCasinos();
    renderTopGames();
    renderTopPromos();
    initDarkMode();
    initScrollAnimations();

    // Log initialization
    console.log('Sweepstakes Casino Listing initialized successfully');
    console.log(`Loaded ${casinos.length} casinos`);
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { casinos, renderCasinos, createCasinoCard };
}
