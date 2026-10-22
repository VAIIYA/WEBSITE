import type { DescriptionBlock } from '@/lib/portfolio'

export interface PolicySection {
  title: string
  blocks: DescriptionBlock[]
}

const p = (text: string): DescriptionBlock => ({ t: 'p', text })
const ul = (...items: string[]): DescriptionBlock => ({ t: 'ul', items })

const ADS_NOTE =
  'Ads are served through Google AdMob. How AdMob uses your device’s advertising identifier, and how to reset or limit it, is described in Section 5 of the general VAIIYA privacy policy.'

/** Title-specific privacy policy sections, keyed by title id. */
export const privacySections: Record<string, PolicySection[]> = {
  hexmoji: [
    {
      title: 'Your data',
      blocks: [
        p('HEXMOJI does not require an account or sign-up. Your progress, settings and unlocked emoji pieces live on your device.'),
        p('In its Google Play Data safety section, HEXMOJI declares that it does not collect or share user data.'),
      ],
    },
    {
      title: 'Advertising',
      blocks: [p('HEXMOJI contains ads and is ad-free during matches. ' + ADS_NOTE)],
    },
    {
      title: 'Deleting your data',
      blocks: [p('Because your progress is stored on your device, you can remove it at any time by clearing the app’s storage or uninstalling HEXMOJI. We hold no account data about you.')],
    },
  ],
  flapmoji: [
    {
      title: 'Your data',
      blocks: [
        p('FlapMoji has no account and no sign-up. Your progress stays on your phone and is never sent to us.'),
        p('In its Google Play Data safety section, FlapMoji declares that it collects and shares device or other IDs (the advertising identifier) for advertising, and that data is encrypted in transit.'),
      ],
    },
    {
      title: 'Advertising',
      blocks: [
        p('FlapMoji is free to play and supported by occasional full-screen ads between runs. There are no ads to continue a run. ' + ADS_NOTE),
      ],
    },
    {
      title: 'Deleting your data',
      blocks: [
        p('Your game progress and settings are stored only on your device; clear the app’s storage or uninstall FlapMoji to remove them. Advertising identifiers are handled by Google; you can reset or limit yours in your device settings (Android: Settings → Privacy → Ads).'),
      ],
    },
  ],
  'emoji-blocks': [
    {
      title: 'Your data',
      blocks: [p('In its Google Play Data safety section, Emoji Blocks declares that it does not collect or share user data.')],
    },
    {
      title: 'Advertising',
      blocks: [p('Emoji Blocks contains ads. ' + ADS_NOTE)],
    },
    {
      title: 'Deleting your data',
      blocks: [p('We do not hold personal data about you for Emoji Blocks. You can reset your game data by clearing the app’s storage or uninstalling it. For any other request, contact us.')],
    },
  ],
  matchmoji: [
    {
      title: 'Your data',
      blocks: [p('Matchmoji follows the general VAIIYA privacy policy. The data it handles is also listed in the Data safety section of its Google Play listing.')],
    },
    {
      title: 'Deleting your data',
      blocks: [p('You can reset your game data by clearing the app’s storage or uninstalling Matchmoji. For any other request, contact us.')],
    },
  ],
  tapedeck: [
    {
      title: 'Your recordings',
      blocks: [
        p('TapeDeck uses your microphone to record voice memos. Live dictation uses on-device speech recognition, so no complex cloud setup is needed.'),
        p('Your recordings and their transcripts are your content. You manage them in the memo library inside the app.'),
      ],
    },
    {
      title: 'Other data',
      blocks: [
        p('In its Google Play Data safety section, TapeDeck declares that it collects and shares device or other IDs, and that data is encrypted in transit. How Google handles advertising and device identifiers is described in Section 5 of the general VAIIYA privacy policy.'),
      ],
    },
    {
      title: 'Deleting your data',
      blocks: [p('To have data related to TapeDeck deleted, contact us and tell us what you would like removed.')],
    },
  ],
  feedme: [
    {
      title: 'Public posts',
      blocks: [
        p('FeedMe displays public messages. Posts are public by nature and can be seen by anyone.'),
        p('FeedMe is built on decentralized communication. Your posts travel across an open network of independent servers. We build and maintain the app; we do not operate that network and we do not host your posts or media on our own servers.'),
        p('Because of that, we cannot delete content from the network itself. We do control what the app shows. Do not post anything you do not want others to see.'),
      ],
    },
    {
      title: 'Your account and key',
      blocks: [
        p('FeedMe does not use an email-and-password account. Your account is a private key that only you hold, stored on your device. Back up your key in Settings: if you lose it, nobody can recover your account.'),
        p('FeedMe has no wallet and no payments, and it sends no push notifications.'),
      ],
    },
    {
      title: 'Advertising',
      blocks: [
        p('FeedMe is free and supported by occasional ads between posts, always labelled “Ad”. To serve and measure ads, the app uses your device’s advertising identifier (advertising ID). ' + ADS_NOTE),
      ],
    },
    {
      title: 'How deletion works',
      blocks: [
        p('To delete your FeedMe data from the app, wipe the key in the app. Once the key is wiped it cannot be recovered. Posts that were already published to the network may remain on independent servers, which VAIIYA does not control.'),
      ],
    },
    {
      title: 'Age and safety',
      blocks: [
        p('FeedMe is for adults aged 18 and over. You can mute accounts and report content in the app. Read how we handle reports in our child safety standards, linked below.'),
      ],
    },
  ],
}
