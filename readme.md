# Project Overview
## Project Schedule
This schedule will be used to keep track of your progress throughout the week and align with our expectations.  
You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.
|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | complete
|Day  1-3| Wireframes / Priority Matrix / Timeline | complete
|Day 4| Core Application Structure (HTML, CSS, etc.) | complete
|Day 5-6| MVP & Bug Fixes | complete
|Day 6| Final Touches | Incomplete
|Day 7| Present | Incomplete
## Project Description
I want to make it minimalist. Minamlist design apeases to me more, looks more aesthetically pleasing. https://mars.nasa.gov/ similar to this with my carrousal except I want to implement it in the middle on the desktop version. Their mobile is how I want it to be. but I want to have the hamburger top right with about me, contact, and 'resume - resume link similar to https://sakshamkapoor.me/' 
Then, on the bottom  of the website have another thing like the hamburger but spread across the page. which houses the social media icons

Desktop wisehttp://capauwels.com/ Like how they have their design layout for the middle. but I want to put their about and stuff at the bottom. Then the social media is going to have to be on top right http://briandelaney.me/. 
## Portfolio I want to Emulate
Search and compare at least 3 profile web sites.  Record your findings in the table below and include some aspect of the site that you would like to incorporate into your own site.
Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
| [sakshamkapoor.me](https://sakshamkapoor.me/) | resume link
|[capauwels.com](http://capauwels.com/) | lay out of page|
| [briandelaney.me](http://briandelaney.me/) |  layout of socil media quotes
---
## Wireframes
Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  
- mobile [Mobile](https://res.cloudinary.com/dx3a3l6k0/image/upload/v1625866748/Handwritten_2021-07-09_173715_oxvjau.jpg)
- [Desktop](https://res.cloudinary.com/dx3a3l6k0/image/upload/v1625866389/Receipt_2021-07-09_172232_ophnrq.jpg)
Wireframing Resources:
- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)
## Time/Priority Matrix 
[My graph](https://res.cloudinary.com/dx3a3l6k0/image/upload/v1626100294/Handwritten_2021-07-12_102819_rq5ikn.jpg)
Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 
Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  
Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 
Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 
### MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  
#### MVP (examples)
- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase
#### PostMVP 
- Anything else that is not MVP
## Functional Components
Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.
Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.
#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 3hr | .5hr |
| Project Previews | H | 3hr | hr |
| Regular Nav | H | 3hrs | 1hr |  
| Adding Form | L | 2hrs|  1hr | 
| mobile flex| h | 3hrs | 2hr|
| desktop flex| h | 3hrs |2hr|
| carrousal | H | 3hrs|  15hr | 
| @media| H | 3hrs | hr | 6hr |
| button| h | 1hr| .5hr|
| outside link resume| M | 2hrs |  1hr |
| resume/socialmedia icons | M | 2hrs | 1hr |
| link social media icons| M | 3hrs | .5 hr |
| scroll to| H| 3hrs | hr|
| card space/dummy| H | 1 hr| 10 hr|
| Total | H | 38hrs| 30.5hrs |
#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| animation |  L | 3 Hrs | 0hr|
|  implement self made logo| L | 1.5hr | 0 hr |
|  make logo | L | 1hr |  0hr |
| tailwind or bootstrap| H | 3hr | 30.5hr |
| Total | H | 11.5hrs| 30.5hrs |
## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
## Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of an a brief description  
```
$('#resume').click((pdf) => {
    window.open('https://drive.google.com/file/d/1ziX7qCm-XjDmpVvqmUpA5yxT51UzaoEP/view?ths=true','mywin','width=500,height=500')

    })

	I am proud of this cause to me this is one of the highest priority/ Writing this I felt like I learned more than I thought.

	const $div = $('<div>').attr('class', 'carousel-item active carousel-item-center')
$('.carousel-inner').append($div)
```
the div code is the one i am most proud of. Not only did I just find a work around my problem. It also led me to think of new ways to style my page because I hade to add in a new slide that was not a project. Which is why there is a picture of me.
## Issues and Resolutions

Thie really only big issue faced was with bootstrap itself.
They already have their own scss on their classes so it makes it really difficult to go in and change it. I had to figure out if that class was detrimental to the functionality of what I need vs just creating a new class.

also the biggest issue was with adding another class to my carousel-items. I found a work around which led me to design me page even more.
