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

const BRAND_CASING: Record<string, string> = { FEEDME: 'FeedMe', FLAPMOJI: 'FlapMoji', RELAY: 'RELAY', TAPEDECK: 'TapeDeck', STICKTIC: 'STICKTIC' }

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
    gradient: 'from-fuchsia-400 to-violet-500',
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
    gradient: 'from-pink-400 to-rose-500',
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
    summary: 'A cheerful emoji match-3 puzzler.',
    about: [
      p('Matchmoji is a cheerful emoji match-3 puzzler from VAIIYA. Swap, match and blast your way through vibrant emoji boards.'),
    ],
    gradient: 'from-emerald-400 to-teal-600',
    platforms: ['android'],
    category: 'game',
    status: 'live',
    tech: ['Unity'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vaiiya.matchmoji',
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
    gradient: 'from-amber-400 to-orange-600',
    platforms: ['android'],
    category: 'app',
    status: 'live',
    tech: ['Native Android'],
    facts: { category: 'Music & Audio', rating: 'PEGI 3', ads: false },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aistudio.voicememos.tapeqc',
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
      { src: '/apps/feedme/phone-2-trending-hashtags.png', alt: 'Trending hashtags' },
      { src: '/apps/feedme/phone-3-advanced-search.png', alt: 'Search' },
      { src: '/apps/feedme/phone-4-messages.png', alt: 'Direct messages' },
      { src: '/apps/feedme/phone-5-account.png', alt: 'Account' },
    ],
    platforms: ['android'],
    category: 'app',
    status: 'in-development',
    facts: { category: 'Social', ads: true },
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
      { src: '/apps/sticktic/promo-1.png', alt: 'Stickers for every mood' },
      { src: '/apps/sticktic/promo-2.png', alt: 'Search by tag and keep favourites' },
      { src: '/apps/sticktic/promo-3.png', alt: 'One tap export to WhatsApp' },
    ],
    platforms: ['android'],
    category: 'app',
    status: 'in-development',
    tech: ['Flutter'],
    facts: { category: 'Communication', rating: 'PEGI 3', ads: true },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.stickmatic.app.stickmatic',
  },
]
