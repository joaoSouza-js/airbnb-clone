
# Airbnb Clone

This is a UI clone that implements some features of Airbnb, like maps and calendar integration.

## Presentation Video


https://github.com/joaoSouza-js/airbnb-clone/assets/84108989/1b6dc5ea-eb75-4f69-9ecf-5613d799af8a


## Screens

### Feed
<img src="https://github.com/joaoSouza-js/airbnb-clone/assets/84108989/f1700099-3ac2-45ce-b402-b50defac22eb"  style="aspect-ratio: 16 / 9" width="30%"/>

## Main Concepts

### 1. FlashList
```bash
npx expo install react-native-maps
```
I use FlashList instead of FlatList because FlashList can be up to 5 times faster in the UI thread and 10 times faster in the JS thread than a usual FlatList. This performance improvement is particularly beneficial for lower-performance devices or Android devices.

I was initially hesitant to use this package, but since it is available in the Expo documentation, I decided to give it a chance.


### 2. Carousel

https://github.com/joaoSouza-js/airbnb-clone/assets/84108989/799fc61e-c489-4d94-a3fb-0c7a26030251


In the carousel, I use a normal FlatList as I don't need to render many items. I used props such as `snapToInterval` and `decelerationRate` to create a smooth and easy transition effect between carousel images. Additionally, I use the `onViewableItemsChanged` event to capture slide interactions and update the current slide selection.

## Search Screen
<img src="https://github.com/joaoSouza-js/airbnb-clone/assets/84108989/d6f1d6a4-b33e-4761-8882-59f009d25e8f"   width="30%"/>

This screen is where the user makes their search, i separate in 3 

**1 Location Search Modal**

 When the user accesses this modal, it shows the place search history. If the user types a place, the API integration with Google Places updates the results based on the search query.

 **2 Calendar Modal**

<img src="https://github.com/joaoSouza-js/airbnb-clone/assets/84108989/a683deb8-fdea-492c-9c30-10b3558bf62c"   width="30%"/>
</br>
This modal shows the calendar based on the current date, displaying the current month and subsequent months. The user can select an initial day and an end day for their stay.

**3 Guest Modal**

<img src="https://github.com/joaoSouza-js/airbnb-clone/assets/84108989/dcc94b79-8852-49c0-8aa1-81a5b4a66e20"   width="30%"/>
In this modal, the user selects how many guests will stay in the place.

## Map Screen
<img src="https://github.com/joaoSouza-js/airbnb-clone/assets/84108989/bbeb7fe6-c65c-49c3-8f90-24010cb07a99"   width="30%"/>

### Details

This screen shows the search results.


**Map**
   
 React Native Maps is used to display a map based on the user's platform, whether it is Apple Maps or Google Maps.
   ```bash
   expo install react-native-maps
   ```



 **Place Card**

<img src="https://github.com/joaoSouza-js/airbnb-clone/assets/84108989/91066eca-b5dd-41eb-88fc-2a8a06471163"   width="30%"/>
   
When the user clicks on a place, a card appears showing photos and details of the selected place. Besides basic information, I use the same carousel logic from the feed carousel.

**List of Nearby Places with Details**
   

https://github.com/joaoSouza-js/airbnb-clone/assets/84108989/90f13fc1-fdd0-4ba0-a626-c76f7229e99e


   - In this screen, I use BottomSheet from `@gorhom` that works with React Native Reanimated and React Native Gesture Handler in the background to add clear and smooth animations. This is used to show a list of nearby places.
   ```bash
   npm i @gorhom/bottom-sheet@^4
   ```

Feel free to explore the project and contribute if you have any ideas for improvements or new features!
