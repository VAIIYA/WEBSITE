export type AppPlatform = 'android' | 'web'
export type AppCategory = 'app' | 'game'
export type AppStatus = 'live' | 'in-development'

/** A block of the Google Play description, rendered as a paragraph, sub-heading or bullet list. */
export type DescriptionBlock =
  | { t: 'p'; text: string }
  | { t: 'h'; text: string }
  | { t: 'ul'; items: string[] }

export interface PortfolioApp {
  /** URL slug, e.g. /games/hexmoji */
  id: string
  /** Display name shown on cards and pages */
  name: string
  /** One-line summary (the Google Play short description) shown on cards and page headers */
  summary: string
  /** Full description shown on the detail page, based on the Google Play listing */
  about: DescriptionBlock[]
  /** Square-ish icon under /public */
  image?: string
  /** Wide 2:1 feature banner under /public */
  featureImage?: string
  /** Fallback gradient used when no image is provided */
  gradient: string
  /** Screenshots under /public, shown on the detail page */
  screenshots?: { src: string; alt: string }[]
  /** Screenshots are landscape (e.g. a horizontal game) instead of portrait phone shots */
  landscapeScreenshots?: boolean
  platforms: AppPlatform[]
  category: AppCategory
  status: AppStatus
  /** Technology used to build it, shown on the detail page */
  tech?: string[]
  /** Facts shown in the "At a glance" list */
  facts?: { category?: string; rating?: string; ads?: boolean }
  /** Google Play (Android) URL */
  playStoreUrl?: string
  /** Extra links shown under the privacy link in "At a glance" */
  links?: { label: string; href: string }[]
}

/** Path of the detail page: games live under /games, apps under /apps. */
export function titlePath(app: Pick<PortfolioApp, 'id' | 'category'>): string {
  return `/${app.category === 'game' ? 'games' : 'apps'}/${app.id}`
}

const p = (text: string): DescriptionBlock => ({ t: 'p', text })
const h = (text: string): DescriptionBlock => ({ t: 'h', text })
const ul = (...items: string[]): DescriptionBlock => ({ t: 'ul', items })

const BRAND_CASING: Record<string, string> = { FEEDME: 'FeedMe', FLAPMOJI: 'FlapMoji', RELAY: 'RELAY', TAPEDECK: 'TapeDeck', STICKTIC: 'STICKTIC', VOXTAPE: 'VOXTAPE', SUMOJI: 'SUMOJI' }

/** "EMOJI BLOCKS" -> "Emoji Blocks", with brand casing such as "FeedMe". */
export function displayName(name: string): string {
  if (BRAND_CASING[name]) return BRAND_CASING[name]
  return name
    .toLowerCase()
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export const PLAY_PROFILE_URL = 'https://play.google.com/store/apps/dev?id=7804895561285369781'

export const portfolioApps: PortfolioApp[] = [
  {
    id: 'hexmoji',
    name: 'HEXMOJI',
    summary: 'Kawaii strategy board game. Copy & jump to capture emoji pieces!',
    about: [
      p('Master the ancient two-move tactic: COPY to clone your piece onto an adjacent cell, or JUMP two spaces to land and capture. Surround enemy emojis and convert them to your side. Fill the board and outsmart your rival to win!'),
      h('Two ways to play'),
      ul('Play vs CPU with 4 difficulty levels, from gentle Sassy to ruthless Genious', 'Pass-and-play 2-player mode on the same device'),
      h('Strategy that grows'),
      ul('4 board sizes: Blitz, Classic, Grand, and Ultra — each unlocks as you level up', 'Chain conversions and plan jumps to dominate the hex grid'),
      h('Collect & unlock'),
      ul('Earn XP for every match and level up to 10', 'Unlock 12 new emoji pieces per tier and build your dream team', 'Choose your You & Rival emojis from a growing collection'),
      h('Cute themes'),
      ul('5 pastel themes: Bubblegum, Minty, Berry, Sunny, and Ocean', 'Juicy animations: bouncy jumps, capture pops, confetti celebrations'),
      h('The Hexmoji difference'),
      ul('Fast, snackable matches perfect for quick breaks', 'One-handed portrait play, ad-free during matches', 'Works offline — no internet required'),
    ],
    featureImage: '/games/hexmoji/feature.svg',
    image: '/games/hexmoji/icon.png',
    gradient: 'from-fuchsia-400 to-violet-500',
    screenshots: [
      { src: '/games/hexmoji/shot-1.jpg', alt: 'HEXMOJI screenshot 1' },
      { src: '/games/hexmoji/shot-2.jpg', alt: 'HEXMOJI screenshot 2' },
      { src: '/games/hexmoji/shot-3.jpg', alt: 'HEXMOJI screenshot 3' },
      { src: '/games/hexmoji/shot-4.jpg', alt: 'HEXMOJI screenshot 4' },
      { src: '/games/hexmoji/shot-5.jpg', alt: 'HEXMOJI screenshot 5' },
    ],
    platforms: ['android'],
    category: 'game',
    status: 'live',
    tech: ['Unity'],
    facts: { category: 'Arcade', rating: 'PEGI 3', ads: true },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hexmoji',
  },
  {
    id: 'flapmoji',
    name: 'FLAPMOJI',
    summary: 'One-tap emoji flapper with 8 worlds, power-ups and 100+ emoji to unlock.',
    about: [
      p('Tap to flap a grumpy little emoji through an endless gauntlet of pipes. FlapMoji is a one-tap arcade game that is easy to start and hard to put down.'),
      h('Two ways to play'),
      ul('Classic: pure one-tap flappy gameplay. Just you, the pipes and your best score.', 'Arcade: faster, tighter, wilder. Grab power-ups, collect coins and try not to eat the mushroom.'),
      h('Arcade power-ups'),
      ul('Shield: soak one hit', 'Rocket: blast straight through the pipes', 'Slow-mo: bend time for a few seconds', 'Magnet: pull every coin on screen', 'Mushroom: a trap! You will get big. Good luck.'),
      h('More to chase'),
      ul('8 hand-tuned worlds that change as your score climbs: sunny meadows, golden dusk, neon night, cotton-candy skies, deep space and more', '100+ unlockable emoji characters', 'Spend Arcade coins in the shop on bird-trail cosmetics', 'One coin-revive per Arcade run. No ads to continue, ever', 'Daily streak bonus', 'Reduce-motion mode, mutable music and sound effects, haptics toggle'),
      p('No account and no sign-up. Your progress stays on your phone.'),
      p('Free to play, supported by occasional full-screen ads between runs.'),
      p('Music by JDSherbert (jdsherbert.itch.io), used with permission.'),
    ],
    image: '/games/flapmoji/icon.png',
    featureImage: '/games/flapmoji/feature.png',
    gradient: 'from-sky-400 to-emerald-400',
    screenshots: [
      { src: '/games/flapmoji/menu.png', alt: 'Main menu' },
      { src: '/games/flapmoji/arcade.png', alt: 'Arcade mode with coins' },
      { src: '/games/flapmoji/shop.png', alt: 'Trail shop' },
      { src: '/games/flapmoji/gameover.png', alt: 'Game over & XP' },
    ],
    platforms: ['android'],
    category: 'game',
    status: 'live',
    tech: ['Unity'],
    facts: { category: 'Arcade', rating: 'PEGI 3', ads: true },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.flapmoji.game',
  },
  {
    id: 'emoji-blocks',
    name: 'EMOJI BLOCKS',
    summary: 'Stack emoji blocks, clear lines, unlock new emojis, and beat your high score!',
    about: [
      p('Emoji Blocks – The cutest block puzzle game! Stack adorable emoji blocks, clear lines, earn XP, and unlock a growing collection of fun emojis. Emoji Blocks is a relaxing yet addictive puzzle game that’s easy to learn but challenging to master.'),
      p('Whether you have a minute or an hour, Emoji Blocks is perfect for quick sessions or chasing your next high score.'),
      h('Simple controls'),
      ul('Move left or right', 'Rotate blocks', 'Drop instantly', 'Easy to play, hard to master'),
      h('Unlock new emojis'),
      p('Earn XP by playing and unlock new emoji themes as you rank up. Choose your favorite emoji to use as your falling blocks.'),
      h('Progression system'),
      ul('Gain XP every game', 'Reach new ranks', 'Unlock new emoji collections', 'Track your best scores and lines cleared'),
      h('Endless challenge'),
      p('There are no time limits. Keep stacking, clearing lines, and improving your strategy to achieve your highest score.'),
      h('Clean, modern design'),
      p('Enjoy a soft pastel interface with smooth animations and satisfying gameplay designed for both phones and tablets.'),
      h('Relaxing gameplay'),
      p('Play with sound effects or mute them for a calm puzzle experience.'),
      h('Perfect for'),
      ul('Puzzle lovers', 'Casual gamers', 'Emoji fans', 'Offline gaming', 'Quick play sessions'),
      p('Can you unlock every emoji and become the ultimate Emoji Blocks master?'),
    ],
    image: '/games/emoji-blocks/icon.png',
    gradient: 'from-pink-400 to-rose-500',
    screenshots: [
      { src: '/games/emoji-blocks/shot-1.jpg', alt: 'Emoji Blocks screenshot 1' },
      { src: '/games/emoji-blocks/shot-2.jpg', alt: 'Emoji Blocks screenshot 2' },
      { src: '/games/emoji-blocks/shot-3.jpg', alt: 'Emoji Blocks screenshot 3' },
      { src: '/games/emoji-blocks/shot-4.jpg', alt: 'Emoji Blocks screenshot 4' },
      { src: '/games/emoji-blocks/shot-5.jpg', alt: 'Emoji Blocks screenshot 5' },
      { src: '/games/emoji-blocks/shot-6.jpg', alt: 'Emoji Blocks screenshot 6' },
      { src: '/games/emoji-blocks/shot-7.jpg', alt: 'Emoji Blocks screenshot 7' },
      { src: '/games/emoji-blocks/shot-8.jpg', alt: 'Emoji Blocks screenshot 8' },
    ],
    platforms: ['android'],
    category: 'game',
    status: 'live',
    tech: ['Unity'],
    facts: { category: 'Arcade', rating: 'PEGI 3', ads: true },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aistudio.emojiblocks.xqkztv',
  },
  {
    id: 'matchmoji',
    name: 'MATCHMOJI',
    summary: 'Swap cute emoji, chain combos, and pop your way through 10 sweet levels!',
    about: [
      p('MATCHMOJI is the match-3 puzzle game made entirely of emoji! Swap adorable emoji faces, chain matches of 3, 4 or 5 to unleash special halo tiles, and cascade your way to huge combos. Simple to learn, seriously hard to put down.'),
      h('Why you’ll love it'),
      ul('10 hand-tuned levels that get bigger and trickier as you go, from a cozy 7x8 grid to a wild 9x10 emoji storm', 'Match 4+ in a row to create a special HALO tile. Swap it into play to blast a whole row and column at once', 'Combo multipliers reward fast cascades: the bigger the chain, the bigger the score', 'Move-limited levels with star ratings (1-3 stars) push you to master every board, not just clear it', 'A colorful, kawaii-style world of grinning, beaming, star-struck and love-struck emoji faces', 'Smooth swap, pop and cascade animations with juicy combo popups', 'Relaxing background music while you play'),
      h('How to play'),
      p('Tap an emoji, then tap a neighbor to swap them. Line up 3 or more matching emoji to clear them and score points. Match 4 or 5 in a row to spawn a special halo tile that clears an entire row and column when triggered. Hit the target score before you run out of moves to earn up to 3 stars and unlock the next level!'),
      p('Whether you have 30 seconds or 30 minutes, MATCHMOJI is the perfect bite-sized puzzle break.'),
    ],
    image: '/games/matchmoji/icon.png',
    gradient: 'from-emerald-400 to-teal-600',
    screenshots: [
      { src: '/games/matchmoji/shot-1.jpg', alt: 'Matchmoji screenshot 1' },
      { src: '/games/matchmoji/shot-2.jpg', alt: 'Matchmoji screenshot 2' },
      { src: '/games/matchmoji/shot-3.jpg', alt: 'Matchmoji screenshot 3' },
      { src: '/games/matchmoji/shot-4.jpg', alt: 'Matchmoji screenshot 4' },
    ],
    platforms: ['android'],
    category: 'game',
    status: 'live',
    tech: ['Unity'],
    facts: { category: 'Puzzle', rating: 'PEGI 3', ads: true },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.matchmoji',
  },
  {
    id: 'pixeltris',
    name: 'PIXELTRIS',
    summary: 'Tetris meets falling sand! Build color bridges wall-to-wall and pop them all.',
    about: [
      p('Tetris meets falling sand! Blocks melt into colorful sand beads when they land. Build a same-color bridge from the left wall to the right wall and pop it! Easy to learn, hard to master.'),
      h('How to play'),
      ul('Drag to move, tap to spin, swipe down to drop, swipe up to save a block', 'Connect matching beads wall-to-wall to clear bridges', 'Chain clears for huge combo points'),
      h('Game modes'),
      ul('Classic: endless arcade rising through 10 levels', 'Zen: relax, no game over, pure flow', 'Campaign: 15 hand-made puzzle levels, earn up to 45 stars', '3 board sizes (40x80, 60x100, 80x120) and 3, 5 or 7 colors'),
      h('Power-ups & progress'),
      ul('Chroma Bomb, Color Wipe and Sledgehammer', 'Daily challenges, career trophies, coins and XP', 'Star chests and supply drops'),
      h('Family friendly'),
      ul('Kid-friendly look, no account, plays fully offline', 'Sound and haptics can be switched off anytime'),
      p('Love block puzzles, Tetris or sand games? Download PIXELTRIS free and start popping bridges!'),
    ],
    image: '/games/pixeltris/icon.png',
    gradient: 'from-sky-400 to-indigo-500',
    screenshots: [
      { src: '/games/pixeltris/shot-1.jpg', alt: 'PIXELTRIS screenshot 1' },
      { src: '/games/pixeltris/shot-2.jpg', alt: 'PIXELTRIS screenshot 2' },
      { src: '/games/pixeltris/shot-3.jpg', alt: 'PIXELTRIS screenshot 3' },
      { src: '/games/pixeltris/shot-4.jpg', alt: 'PIXELTRIS screenshot 4' },
    ],
    platforms: ['android'],
    category: 'game',
    status: 'live',
    facts: { category: 'Arcade', rating: 'PEGI 3', ads: true },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.pixeltris',
  },
  {
    id: 'marblitz',
    name: 'MARBLITZ',
    summary: '50 marbles, 5 stages, one champion. Race, draft perks and win the crown!',
    about: [
      p('Roll, bump and boost your way to the crown in MARBLITZ, the toy-sized marble knockout show!'),
      p('50 marbles start. After every stage the slowest are cut. Survive five wild courses built from bookshelves, crayons, pillows and rugs, and be the last marble rolling in the Toy Box Finale.'),
      h('Knockout show'),
      ul('50 racers, 5 stages, one champion', 'Every stage cuts the field: stay ahead or roll home', 'Fresh course layouts every show, so no two runs are the same'),
      h('Draft your build'),
      ul('Pick perks and abilities between stages', 'Stack speed, grip, armor or wild abilities like teleports', 'Reroll an offer when the cards don’t go your way'),
      h('Pure marble chaos'),
      ul('Physics-driven bumps, jumps, ramps and risky shortcuts', 'Live commentary that calls every overtake and wipeout', 'Simple one-thumb steering, made for quick sessions'),
      p('Free to play. Optional rewarded ads give you an extra reroll; you never have to watch an ad to keep playing.'),
    ],
    image: '/games/marblitz/icon.png',
    featureImage: '/games/marblitz/shot-1.jpg',
    gradient: 'from-sky-400 to-indigo-500',
    screenshots: [
      { src: '/games/marblitz/shot-1.jpg', alt: 'Marblitz screenshot 1' },
      { src: '/games/marblitz/shot-2.jpg', alt: 'Marblitz screenshot 2' },
      { src: '/games/marblitz/shot-3.jpg', alt: 'Marblitz screenshot 3' },
      { src: '/games/marblitz/shot-4.jpg', alt: 'Marblitz screenshot 4' },
      { src: '/games/marblitz/shot-5.jpg', alt: 'Marblitz screenshot 5' },
      { src: '/games/marblitz/shot-6.jpg', alt: 'Marblitz screenshot 6' },
    ],
    landscapeScreenshots: true,
    platforms: ['android'],
    category: 'game',
    status: 'live',
    facts: { category: 'Arcade', rating: 'PEGI 3', ads: true },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.marblesmaniacs',
  },
  {
    id: 'falling-marbles',
    name: 'FALLING MARBLES',
    summary: 'Turn the tower, drop your marble through giant rooms and smash every floor!',
    about: [
      p('Turn the tower. Drop the marble. Smash the floors.'),
      p('Falling Marbles is a one-thumb drop game with a tiny glass marble and a world that is far too big. Bounce down giant towers inside oversized rooms: a bedpost in a kid’s bedroom, a stacking-ring toy in the playroom, a kitchen roll, an icicle in the freezer and a huge bolt in the garage.'),
      h('How to play'),
      ul('Drag left and right to turn the tower', 'Line up a gap under the bouncing marble to drop to the next floor', 'Red is bad: thumbtacks, toy bricks, hot hobs, frozen spikes and saws end your drop', 'Fall through three floors in a row and your marble catches fire, smashing straight through the next floor', 'Land on the pad at the bottom and steer for the x5 wedge to multiply your gems'),
      h('Five giant rooms, new tricks in each'),
      ul('The Bedroom: pillows bounce you extra high', 'The Playroom: floors that spin by themselves', 'The Kitchen: cookies crumble after one bounce', 'The Freezer: ice trays slide over the holes', 'The Garage: saws sweep across the floor'),
      h('50 levels, endless and a daily drop'),
      ul('50 handmade levels, each hiding three stars down the trickier path', 'Endless mode: room after room, deeper and harder, chase your best score', 'Daily drop: the same tower for everyone today, with bonus gems for your streak'),
      h('Collect and customize'),
      ul('12 marble colors, all free', 'Earn gems for cat-eye, steelie and galaxy finishes', 'Unlock sparkle, comet and rainbow trails'),
      h('Made for one thumb'),
      ul('Quick runs, smooth controls and satisfying shattering floors', 'Soft pastel 3D style, haptics and relaxing music', 'Play offline, no account needed'),
      p('How deep can you fall?'),
    ],
    image: '/games/falling-marbles/icon.png',
    gradient: 'from-pink-300 to-sky-400',
    screenshots: [
      { src: '/games/falling-marbles/shot-1.jpg', alt: 'Falling Marbles screenshot 1' },
      { src: '/games/falling-marbles/shot-2.jpg', alt: 'Falling Marbles screenshot 2' },
      { src: '/games/falling-marbles/shot-3.jpg', alt: 'Falling Marbles screenshot 3' },
      { src: '/games/falling-marbles/shot-4.jpg', alt: 'Falling Marbles screenshot 4' },
      { src: '/games/falling-marbles/shot-5.jpg', alt: 'Falling Marbles screenshot 5' },
      { src: '/games/falling-marbles/shot-6.jpg', alt: 'Falling Marbles screenshot 6' },
      { src: '/games/falling-marbles/shot-7.jpg', alt: 'Falling Marbles screenshot 7' },
    ],
    platforms: ['android'],
    category: 'game',
    status: 'live',
    facts: { category: 'Casual', rating: 'PEGI 3', ads: true },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.fallingmarbles',
  },
  {
    id: 'mini-marbles',
    name: 'MINI MARBLES',
    summary: 'Draw tracks, link marble towers to cups and keep every color rolling!',
    about: [
      p('Lay the tracks. Keep the marbles rolling.'),
      p('Mini Marbles is a calm, colorful strategy puzzle about building the perfect marble track network. Towers fill up with glossy toy marbles, cups ask for their color, and you draw the tracks that bring them together. Easy to pick up, deeply satisfying to master.'),
      h('How it works'),
      ul('Drag to draw tracks between marble towers and cups of the same color', 'Marbles find the quickest route all by themselves', 'New towers and cups keep appearing, so plan ahead before a cup overflows', 'Every week brings fresh track and a bonus of your choice'),
      h('Three handcrafted maps'),
      ul('Marble Bay: a lazy river, a quiet lake and the open sea', 'Dune Valley: wide rivers winding through warm sand and red mesas', 'Frost Peaks: snowy mountains, a frozen lake and plenty of tunnels'),
      p('Earn up to 3 stars on every map to unlock the next one.'),
      h('Clever pieces'),
      p('Bridges over water, tunnels through mountains, boosters for speed, express tubes that link far-away tracks, turntables that keep busy junctions flowing and funnels that give a busy cup room to breathe.'),
      h('Daily challenge'),
      p('A new map and twist every day: Rush hour, Tight budget, Booster bonanza, No bridges or One color. The same puzzle for everyone, double XP and a streak to keep alive.'),
      h('Progress and collect'),
      ul('Level up to unlock cat-eye, metallic and galaxy marbles', 'Restyle your network with wooden, chrome and neon tracks', 'Collect 12 achievements and follow your lifetime stats'),
      h('Made for touch'),
      ul('Smooth drawing, hold to erase, tap a tower to turn its exit and undo with one tap', 'Pause any time and play at your own pace', 'Color-blind symbols, haptics and a relaxing soundtrack', 'Play offline, no account needed'),
      p('Perfect for fans of minimalist strategy, route planning, traffic and logic puzzles. How long can you keep every marble rolling?'),
    ],
    image: '/games/mini-marbles/icon.png',
    featureImage: '/games/mini-marbles/shot-1.jpg',
    gradient: 'from-teal-300 to-sky-500',
    screenshots: [
      { src: '/games/mini-marbles/shot-1.jpg', alt: 'Mini Marbles screenshot 1' },
      { src: '/games/mini-marbles/shot-2.jpg', alt: 'Mini Marbles screenshot 2' },
      { src: '/games/mini-marbles/shot-3.jpg', alt: 'Mini Marbles screenshot 3' },
      { src: '/games/mini-marbles/shot-4.jpg', alt: 'Mini Marbles screenshot 4' },
      { src: '/games/mini-marbles/shot-5.jpg', alt: 'Mini Marbles screenshot 5' },
      { src: '/games/mini-marbles/shot-6.jpg', alt: 'Mini Marbles screenshot 6' },
      { src: '/games/mini-marbles/shot-7.jpg', alt: 'Mini Marbles screenshot 7' },
      { src: '/games/mini-marbles/shot-8.jpg', alt: 'Mini Marbles screenshot 8' },
    ],
    landscapeScreenshots: true,
    platforms: ['android'],
    category: 'game',
    status: 'live',
    facts: { category: 'Puzzle', rating: 'PEGI 3', ads: true },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.meneergroot.minimarbles',
  },
  {
    id: 'sumoji',
    name: 'SUMOJI',
    summary: 'Solve addictive logic puzzles with cute emojis! Deduce, mark, and conquer.',
    about: [
      p('Welcome to SUMOJI, the fresh, addictive logic puzzle game that blends spatial deduction, Queen’s puzzle mechanics and grid elimination with charming emojis!'),
      h('How to play'),
      ul('One emoji per region: every uniquely colored territory must contain exactly one emoji', 'One emoji per row and column: no row or column can have more than one emoji', 'No touching: emojis cannot touch each other horizontally, vertically or diagonally', 'Pure logic, zero guesswork: tap empty cells to eliminate impossible spots, find the forced square and place your emoji'),
      h('Game features'),
      ul('Handcrafted levels: progress through dozens of campaign levels, from cozy 4×4 grids to challenging 8×8 master boards', 'Smart hint system: the 3-tier visual hint guide highlights constrained rows, columns or isolated regions to teach you real deduction techniques', 'Minesweeper-style stakes: play with 3 lives. Every correct deduction feels triumphant; mistakes trigger instant visual feedback', 'Dozens of emoji themes: collect and switch between fun emoji styles, from animals to delicious snacks and cheeky faces', 'Play offline anytime: no Wi-Fi required', 'No intrusive ads: enjoy pure, uninterrupted puzzle focus'),
      p('Sharpen your mind and experience the ultimate tactile puzzle journey.'),
    ],
    image: '/games/sumoji/icon.png',
    gradient: 'from-amber-300 to-pink-400',
    screenshots: [
      { src: '/games/sumoji/shot-1.jpg', alt: 'SUMOJI screenshot 1' },
      { src: '/games/sumoji/shot-2.jpg', alt: 'SUMOJI screenshot 2' },
      { src: '/games/sumoji/shot-3.jpg', alt: 'SUMOJI screenshot 3' },
      { src: '/games/sumoji/shot-4.jpg', alt: 'SUMOJI screenshot 4' },
    ],
    platforms: ['android'],
    category: 'game',
    status: 'live',
    facts: { category: 'Puzzle', rating: 'PEGI 3', ads: false },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.sumoji',
  },
  {
    id: 'tapedeck',
    name: 'TAPEDECK',
    summary: 'Free retro cassette voice recorder with live on-device transcription.',
    about: [
      p('TAPEDECK is a voice recorder with the look and feel of a classic cassette deck. Record notes, lectures, interviews and ideas, and watch your words turn into text live as you speak.'),
      h('Key features'),
      ul('Retro cassette design: clean lines, warm tactile surfaces and a minimalist interface inspired by classic analog tape decks', 'Dual spinning spools: watch the tape move as you record and play back', 'Tactile transport buttons: Record, Play, Pause, Rewind and Fast-Forward with a satisfying mechanical feel', 'Live dictation and transcription: on-device speech recognition transcribes while you talk, no complex cloud setup needed', 'Memo library: search, rename, tag and revisit your recordings in seconds', 'Simple and fast: no clutter, no distractions. Just tap Record and let the tape roll.'),
      p('Perfect for voice notes, meeting notes, lectures, interviews, and sudden inspiration.'),
    ],
    image: '/apps/tapedeck/icon.png',
    gradient: 'from-amber-400 to-orange-600',
    screenshots: [
      { src: '/apps/tapedeck/shot-1.jpg', alt: 'TAPEDECK screenshot 1' },
      { src: '/apps/tapedeck/shot-2.jpg', alt: 'TAPEDECK screenshot 2' },
      { src: '/apps/tapedeck/shot-3.jpg', alt: 'TAPEDECK screenshot 3' },
      { src: '/apps/tapedeck/shot-4.jpg', alt: 'TAPEDECK screenshot 4' },
      { src: '/apps/tapedeck/shot-5.jpg', alt: 'TAPEDECK screenshot 5' },
    ],
    platforms: ['android'],
    category: 'app',
    status: 'live',
    tech: ['Native Android'],
    facts: { category: 'Music & Audio', rating: 'PEGI 3', ads: false },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aistudio.voicememos.tapeqc',
  },
  {
    id: 'voxtape',
    name: 'VOXTAPE',
    summary: 'Vintage cassette podcast player with tactile retro Hi-Fi deck controls.',
    about: [
      p('VOXTAPE transforms podcast listening into a tactile retro Hi-Fi experience.'),
      h('Features'),
      ul('Authentic spinning cassette spools', 'Vintage digital counter', 'Curated RSS feeds', 'Variable playback speeds', 'A vintage aesthetic throughout'),
    ],
    image: '/apps/voxtape/icon.png',
    gradient: 'from-stone-400 to-amber-600',
    screenshots: [
      { src: '/apps/voxtape/shot-1.jpg', alt: 'VOXTAPE screenshot 1' },
      { src: '/apps/voxtape/shot-2.jpg', alt: 'VOXTAPE screenshot 2' },
      { src: '/apps/voxtape/shot-3.jpg', alt: 'VOXTAPE screenshot 3' },
      { src: '/apps/voxtape/shot-4.jpg', alt: 'VOXTAPE screenshot 4' },
    ],
    platforms: ['android'],
    category: 'app',
    status: 'live',
    facts: { category: 'Music & Audio', rating: 'PEGI 3', ads: true },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.voxtape',
  },
  {
    id: 'feedme',
    name: 'FEEDME',
    summary: 'Short thoughts, big conversations. A calm, decentralized social feed that is yours.',
    about: [
      p('FeedMe is a social app for short thoughts and big conversations. It has the fast, open feel of a public timeline and the visual flair of a modern photo feed, in one calm, clutter-free app.'),
      h('Your account, your rules'),
      p('No company owns your FeedMe account. It is built on decentralized communication: your account is a private key that only you hold, and your posts travel across an open network of independent servers instead of living on one company’s platform.'),
      h('What you can do'),
      ul('Share short notes and reply to others', 'Follow people and read your timeline', 'Discover trending hashtags and search topics', 'See the pictures, links and videos people share', 'Send direct messages', 'Bookmark notes you want to keep', 'Mute people or report content you don’t want to see'),
      h('Calm by design'),
      ul('No notification spam: FeedMe sends no push notifications', 'No wallet, no payments, no clutter', 'Free, with occasional ads between posts, always labelled “Ad”'),
      h('Safe for everyone'),
      p('FeedMe is for adults aged 18 and over and has zero tolerance for child sexual abuse and exploitation. Read how we handle reports in our child safety standards.'),
      h('Good to know'),
      ul('Posts are public and can be seen by others', 'Back up your private key in Settings. If you lose it, nobody can recover your account'),
      p('Questions or feedback? Contact vaiiya@googlegroups.com.'),
    ],
    image: '/apps/feedme/icon.png',
    featureImage: '/apps/feedme/feature.png',
    gradient: 'from-orange-300 to-rose-400',
    screenshots: [
      { src: '/apps/feedme/phone-1-welcome.png', alt: 'Welcome' },
      { src: '/apps/feedme/phone-2-trending-hashtags.png', alt: 'Trending hashtags' },
      { src: '/apps/feedme/phone-3-advanced-search.png', alt: 'Search' },
      { src: '/apps/feedme/phone-4-messages.png', alt: 'Direct messages' },
      { src: '/apps/feedme/phone-5-account.png', alt: 'Account' },
    ],
    platforms: ['android'],
    category: 'app',
    status: 'live',
    facts: { category: 'Social', ads: true },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.feedme',
    links: [{ label: 'Child safety standards', href: '/apps/feedme/child-safety' }],
  },
  {
    id: 'relays',
    name: 'RELAYS',
    summary: 'Pure media, decentralized feeds. The calm, video and photo-first social experience on open relays.',
    about: [
      p('RELAYS is an open, media-first social feed designed for short videos and photography. Inspired by the vertical rhythm of modern video feeds, built on open, decentralized communication with no big tech algorithms dictating what you see.'),
      h('Decentralized by design'),
      p('Nobody owns your RELAYS account. You hold your own keys and connect directly to open Nostr relays across the globe. Your content belongs to you.'),
      h('What you can do'),
      ul(
        'Immerse yourself in full-screen vertical video and high-resolution photo feeds',
        'Post your favorite moments with videos and photos — pure media, no text-only clutter',
        'React with likes and join conversations through threaded comments',
        'Discover creators and media across open relays',
        'Edit your profile with zero wallets or payments needed',
      ),
      h('Calm & Focused'),
      ul(
        'No notification spam',
        'No crypto wallets, no zaps, no payment clutter',
        'Free, with unobtrusive native ads between posts',
      ),
      h('Privacy & Safety'),
      p('RELAYS is built for adults and maintains strict community standards. Read our privacy policy for full details on how media and data interact with open relays.'),
      h('Good to know'),
      ul(
        'Media and interactions posted to open relays are public',
        'Always back up your private key in your settings',
      ),
      p('Questions or feedback? Contact vaiiya@googlegroups.com.'),
    ],
    image: '/apps/relays/icon.png',
    featureImage: '/apps/relays/feature.png',
    gradient: 'from-amber-200 to-orange-400',
    screenshots: [
      { src: '/apps/relays/phone-1-feed.png', alt: 'Feed' },
      { src: '/apps/relays/phone-2-search.png', alt: 'Search & Explore' },
      { src: '/apps/relays/phone-3-profile.png', alt: 'Profile' },
    ],
    platforms: ['android'],
    category: 'app',
    status: 'in-development',
    facts: { category: 'Social', ads: true },
  },
  {
    id: 'snapmatic',
    name: 'SNAPMATIC',
    summary: 'Real photos, shot right now. A decentralized photo feed with no gallery uploads and no filters.',
    about: [
      p('SNAPMATIC is a photo app for the moment you are in. It is built around the in-app camera: shoot, post, done. Photos taken in the app carry a “Shot on SNAPMATIC” mark, so you can tell what was captured right there and then.'),
      h('Your account, your rules'),
      p('Nobody owns your SNAPMATIC account. It is built on decentralized communication: your account is a private key that only you hold, and your photos travel across an open network of independent servers instead of living on one company’s platform.'),
      h('What you can do'),
      ul('Scroll a full-screen vertical photo feed', 'Shoot a photo in 3:4 or 9:16 and post it with a caption and hashtags', 'Follow people, like photos and join the conversation in the comments', 'Browse a profile as a gallery of photos', 'Search and explore photos from around the network', 'Save photos, mute people and report content you don’t want to see'),
      h('Calm by design'),
      ul('Camera first: no filter stack, no editing maze', 'No notification spam: SNAPMATIC sends no push notifications', 'No wallet, no payments, no zaps', 'Free, with occasional ads between photos, always labelled “Sponsored”'),
      h('Safe for everyone'),
      p('SNAPMATIC is for adults aged 18 and over and has zero tolerance for child sexual abuse and exploitation. Read how we handle reports in our child safety standards.'),
      h('Good to know'),
      ul('Photos are public and can be seen by others', 'Location and camera data are removed from your photos before they are shared', 'Back up your private key in Settings. If you lose it, nobody can recover your account'),
      p('Questions or feedback? Contact vaiiya@googlegroups.com.'),
    ],
    image: '/apps/snapmatic/icon.png',
    featureImage: '/apps/snapmatic/feature.png',
    gradient: 'from-fuchsia-400 to-orange-300',
    screenshots: [
      { src: '/apps/snapmatic/phone-1-camera.png', alt: 'In-app camera' },
      { src: '/apps/snapmatic/phone-2-post.png', alt: 'New post' },
    ],
    platforms: ['android'],
    category: 'app',
    status: 'in-development',
    facts: { category: 'Social', ads: true },
    links: [{ label: 'Child safety standards', href: '/apps/snapmatic/child-safety' }],
  },
  {
    id: 'relay',
    name: 'RELAY',
    summary: 'Private messages without a big company watching. No phone number, no account.',
    about: [
      p('RELAY is a private messenger with nobody in the middle. There is no big company behind it that reads your chats, builds a profile of you or sells your data. You chat with a key, not with a phone number, and you do not need an account.'),
      h('How it works'),
      p('Your messages are encrypted on your phone and travel over relays: independent servers run by many different people and organisations, not by one company. A relay only passes on a locked packet. It cannot read it, and it does not know who sent it. Because there are many relays, no single one can switch you off or collect everything. You can see and change your relays in the settings.'),
      h('What you get'),
      ul('Familiar chats: bubbles, delivered and read ticks, replies, reactions, delete for everyone', 'Add people by scanning their QR code, with no phone number and no access to your contacts', 'Message requests: a message from someone you do not know waits until you accept it', 'Disappearing messages, per chat', 'Notifications that show only what you allow, and mute for 8 hours, a week or always', 'App lock with fingerprint or screen lock, and blank screenshots while it is on', 'An encrypted back-up of your chats in a file only you can open', 'Light and dark mode'),
      h('Private by design'),
      ul('End-to-end encrypted, always', 'No phone number, no email address, no tracking, no ads, no analytics', 'Your identity is a key that only you control; an external signer app keeps even that key out of RELAY', 'Open source, so anybody can check what the app does'),
      h('RELAY Premium, €0.99 per month'),
      p('Chatting one to one is free, and so is receiving everything, including photos and group messages. Premium adds sending photos, encrypted before they leave your phone, and creating group chats of up to 10 people, with videos, files and voice messages to come. Cancel any time in Google Play.'),
      h('Good to know'),
      ul('There is no password reset, because there is no account. If you lose your key and have no back-up, your chats cannot be recovered', 'RELAY is built on the open Nostr network, so it also works with other apps that use it'),
      p('Questions or feedback? Contact vaiiya@googlegroups.com.'),
    ],
    image: '/apps/relay/icon.png',
    featureImage: '/apps/relay/feature.png',
    gradient: 'from-orange-200 to-amber-400',
    screenshots: [
      { src: '/apps/relay/phone-1-chat.png', alt: 'A private chat' },
      { src: '/apps/relay/phone-2-settings.png', alt: 'Settings' },
      { src: '/apps/relay/phone-3-chat-dark.png', alt: 'A chat in dark mode' },
    ],
    platforms: ['android'],
    category: 'app',
    status: 'in-development',
    facts: { category: 'Communication', ads: false },
  },
  {
    id: 'sticktic',
    name: 'STICKTIC',
    summary: 'Expressive sticker packs for WhatsApp. Browse, favourite and add in one tap.',
    about: [
      p('STICKTIC brings high-quality, expressive sticker packs straight to your WhatsApp chats. From cute animals and cozy vibes to memes and tech humor, find the right sticker for every mood and moment.'),
      h('One tap to WhatsApp'),
      p('No complicated export steps or third-party tools. Preview any pack, tap Add to WhatsApp, and the entire pack is ready in your WhatsApp sticker keyboard instantly.'),
      h('Browse & discover'),
      ul(
        'Explore curated sticker packs across multiple themes: Animal, Cozy, Emoji, Meme, Tech and more',
        'Fast search by hashtag (#animal, #coffee, #cat, #meme), sticker name or matching emoji',
        'Save your favorite stickers with a quick tap to access them anytime in your favorites tray',
        'Track your recent stickers and search history locally for instant re-use'
      ),
      h('Clean, lightweight & offline-ready'),
      ul(
        'Pure sticker focus with zero clutter, no accounts and no sign-up required',
        'Smooth animations, light and dark theme support, and haptic feedback',
        'Stickers are optimized in lightweight WebP format for fast loading and crisp resolution',
        'Works offline once packs are downloaded to your device'
      ),
      h('Privacy first'),
      p('STICKTIC respects your privacy. We do not access your WhatsApp chats, messages or contacts. All favorites and settings stay on your device.'),
      p('Free to use, supported by occasional ads.'),
      p('Questions or feedback? Contact vaiiya@googlegroups.com.'),
    ],
    image: '/apps/sticktic/icon.png',
    featureImage: '/apps/sticktic/feature.png',
    gradient: 'from-amber-300 to-rose-400',
    screenshots: [
      { src: '/apps/sticktic/play-1.jpg', alt: 'STICKTIC screenshot 1' },
      { src: '/apps/sticktic/play-2.jpg', alt: 'STICKTIC screenshot 2' },
      { src: '/apps/sticktic/play-3.jpg', alt: 'STICKTIC screenshot 3' },
      { src: '/apps/sticktic/play-4.jpg', alt: 'STICKTIC screenshot 4' },
    ],
    platforms: ['android'],
    category: 'app',
    status: 'live',
    tech: ['Flutter'],
    facts: { category: 'Communication', rating: 'PEGI 3', ads: true },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.stickmatic.app.stickmatic',
  },
]
