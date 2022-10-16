# <center>Project Name : reactNative-01-newsApp</center>

![newsApp prpject](./media/newApp_image.png)
![Project Gif](https://media.giphy.com/media/68qnyDag1Iw5q06Fs1/giphy.gif)

## [newsApp Project Video](https://github.com/tceyhan/react-native/issues/2#issue-1402266640)

## Project install stage 
- Open editor (Vscode) with terminal
- npx react-native init projectname
- npx react-native run-android => directly run project code.

## Project create stage
- App.js file open and then ctrl+A and delete
- "rnfes" using snippet write and press
- Using git commands /send github account/repository
    - git status
    - git add .
    - again git status
    - git commit -m "NewApp Project | Start"
    - git push origin master
    - You can look your github repository

## Project folder create stage

- create "src" name folders best practise
- App.js configured
    - FlatList component added
    - "NewBanner" component created and inside to  "ListHeaderComponent" property
    - About commments that FlatList component     
- "components" folder created
    - "NewsCard.js" and "NewsCard.style.js" files created
   
### Using properties
- Dimensions => scalable window height and width
- ScrollView =>  banner images are scroolled and with horizontal = {true} 
sub-items are sorted horizontally
- showsHorizontalScrollIndicator => false => this feature removes the line under the images
