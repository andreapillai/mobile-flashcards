# Mobile-Flaschards

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.io/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>

## 🚀 How to use

- Clone this repository using git clone, or download the .zip file and extract.
- Install packages with `yarn` or `npm install`.
- Run `yarn start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)
  - Web: Any web browser
## 📝 Using the App

- Once started, the app will load any decks you have created. If no decks are present, you can load sample decks to test functionality.
- The main menu at the bottom allows you to view the deck list, or add a new deck.
- Tapping on a deck in the list will show you the details for that deck, and will allow you to delete the deck, or add questions.
- If there are already questions in the deck, you will be able to start the quiz.
- Starting a quiz allows you to cycle through the flashcards.
- Tapping on each card will reveal the answer to the question, where you will be able to choose whether you answered correctly or incorrectly.
- After the last question, you will see your total score.


## 🔔 Notifications

- The app will set a daily reminder that will be triggered if you have not started any quizzes that day. The notification will trigger between 8 and 9 PM.
- Starting a quiz resets the notification for the following day.

## TESTING

- App has been tested on Samsung Galaxy J5 and Samsung Galaxy Tab A physical devices
- App has been tested in Google Pixel 3 emulator (Genymotion)