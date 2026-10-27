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
  relays: [
    {
      title: 'Public media and posts',
      blocks: [
        p('RELAYS is a media-first social app for short videos and photography. Posts, media, comments, and likes are public by nature and can be seen by anyone.'),
        p('RELAYS is built on decentralized communication across an open network of independent relays (Nostr). We develop and maintain the app; we do not operate the global relay network, nor do we host your media on proprietary central servers.'),
        p('Because posts travel over independent public relays, content published to the network cannot be modified or deleted by us once broadcast. Always exercise care and do not publish private media or information you do not wish to share publicly.'),
      ],
    },
    {
      title: 'Your account and keys',
      blocks: [
        p('RELAYS does not use traditional email/password credentials or centralized accounts. Your identity is a cryptographic key pair generated and stored locally on your device.'),
        p('RELAYS has no internal wallets, no cryptocurrency transactions, and no payment processing. Back up your private key securely: if you lose it, your account cannot be recovered.'),
      ],
    },
    {
      title: 'Advertising',
      blocks: [
        p('RELAYS is free to use and supported by occasional native ads displayed inline within the media feed, clearly marked as sponsored. To serve and measure relevant ads, the app uses Google AdMob and your device’s advertising identifier (advertising ID). ' + ADS_NOTE),
      ],
    },
    {
      title: 'Permissions',
      blocks: [
        ul(
          'Camera: to capture photos and videos directly within the app for publishing.',
          'Photos & Media: to select and attach existing photos or videos from your device.',
          'Internet and Network state: to connect to open relays and stream media.',
        ),
        p('RELAYS does not access your contacts, continuous location, microphone outside of video recording, or background storage.'),
      ],
    },
    {
      title: 'Data deletion',
      blocks: [
        p('To delete your RELAYS local data and identity, wipe your keys and cache in the app settings, or uninstall the app. Once local keys are removed, your device will no longer access that identity.'),
      ],
    },
    {
      title: 'Age and safety',
      blocks: [
        p('RELAYS is intended for adults aged 18 and older. In-app reporting and user muting are provided to help users manage their content experience.'),
      ],
    },
  ],
  relay: [
    {
      title: 'Your messages',
      blocks: [
        p('RELAY is a private messenger. Every message is encrypted end to end on your phone before it leaves it, so that only you and the people you write to can read it. We build and maintain the app. We do not run a server that your messages pass through, and we cannot read them.'),
        p('Messages travel over relays: independent servers run by many different people and organisations, not by VAIIYA. A relay sees an encrypted packet, its size, the time it arrived and the public key it is addressed to. It cannot read the message or see who sent it. A relay may keep what it receives for as long as it likes, and neither we nor you can make it delete that.'),
      ],
    },
    {
      title: 'Your account and key',
      blocks: [
        p('RELAY does not ask for a phone number, an email address or a name, and there is no account on a server of ours. Your identity is a key pair: a private key that only you hold and a public key you share. The private key is stored on your device in the Android Keystore, or stays in an external signer app of your choice. Back up your key when RELAY asks you to: if you lose it, nobody can recover your account.'),
        p('If you choose a name or a picture for your profile, they are published openly on the network and anybody can read them. Your public key is public by nature.'),
      ],
    },
    {
      title: 'Photos',
      blocks: [
        p('A photo you send is encrypted on your phone with a one-time key and uploaded to a media server. The server stores an encrypted file it cannot open; the key travels inside the encrypted message. A profile picture is uploaded unencrypted and is public. Loading other people’s pictures is off by default; when you turn it on, the host of a picture can see your IP address.'),
        p('Every relay and media server you connect to sees your IP address, as with any internet service. A VPN hides it.'),
      ],
    },
    {
      title: 'Permissions',
      blocks: [
        ul('Camera: only to scan a contact’s QR code. Images are not stored or sent', 'Notifications: to tell you about new messages. You choose how much a notification shows', 'Foreground service and start at boot: to keep a connection to your relays so that messages arrive while the app is closed. A permanent notification shows while this runs, and you can switch it off in the settings', 'Internet and network state: to reach the relays'),
        p('RELAY does not read your contacts, your location, your microphone or your photo library. You pick a picture yourself when you want to send one.'),
      ],
    },
    {
      title: 'Payments',
      blocks: [
        p('RELAY Premium is a subscription sold through Google Play. Google handles the payment and tells the app only whether a subscription is active on your Google account. We never see your name, card or other payment details.'),
        p('RELAY contains no advertising, no analytics and no tracking.'),
      ],
    },
    {
      title: 'How deletion works',
      blocks: [
        p('Your chats, contacts, settings and downloaded photos are stored on your phone only. Signing out in the app removes them from the phone, and a back-up you made yourself is an encrypted file that you keep or delete. Messages that others have already received, and anything published to relays, cannot be recalled by us. You can delete a message for everyone, which sends a request that other apps may or may not follow.'),
      ],
    },
    {
      title: 'Age and safety',
      blocks: [
        p('RELAY is for adults aged 18 and over. You can block anyone, and a message from someone you do not know stays in message requests until you accept it.'),
      ],
    },
  ],
  sticktic: [
    {
      title: 'Your stickers and favourites',
      blocks: [
        p('STICKTIC does not require an account or sign-up. Your favourites, recent stickers and search history are stored locally on your device in application storage.'),
        p('STICKTIC does not collect, store or share personal contact information, identity data, chats or messages.'),
      ],
    },
    {
      title: 'WhatsApp integration',
      blocks: [
        p('STICKTIC uses the official WhatsApp Stickers Content Provider interface to enable adding sticker packs to WhatsApp on your device.'),
        p('STICKTIC has no access to your WhatsApp messages, chat conversations, contacts or account details. The communication is one-way: delivering sticker image files into WhatsApp upon your confirmation.'),
      ],
    },
    {
      title: 'Advertising and device identifiers',
      blocks: [
        p('STICKTIC is free to use and supported by occasional advertisements served through Google AdMob.'),
        p('To serve, personalize, measure and fight fraud in ads, Google AdMob and the Google Mobile Ads SDK collect and transmit device or other IDs (such as the Android Advertising ID / AAID) along with standard technical device diagnostics to Google.'),
        p('All data transmitted by the Google Mobile Ads SDK is encrypted in transit using standard HTTPS/TLS protocols. ' + ADS_NOTE),
      ],
    },
    {
      title: 'Google Play Data Safety declaration',
      blocks: [
        p('In accordance with the Google Play User Data policy, STICKTIC declares the following data practices:'),
        ul(
          'Device or other IDs: Collected and shared with third-party ad networks (Google AdMob) for Advertising, Marketing and Analytics purposes.',
          'Data encryption: All data transmitted off-device is encrypted in transit (HTTPS).',
          'No personal data collected: No name, email address, phone number, location, financial or health data is collected or shared.',
        ),
      ],
    },
    {
      title: 'Managing and deleting your data',
      blocks: [
        p('Because all app preferences, favourites and history are stored locally on your device, you can delete them at any time by clearing the app’s storage or uninstalling STICKTIC. We do not maintain user accounts on our servers.'),
        p('You can reset or opt out of personalized advertising identifiers at any time through your Android device settings (Settings → Privacy → Ads).'),
        p('For any questions or privacy inquiries, contact us at vaiiya@googlegroups.com.'),
      ],
    },
  ],
}
