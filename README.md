# A-Frame 3D Model Project

Built with [A-Frame](https://aframe.io), a web framework for building virtual reality experiences. Make WebVR with HTML and Entity-Component. Works on Vive, Rift, desktop, mobile platforms.

Click and drag on the desktop. Open it on a smartphone and use the device motion sensors. Or [plug in a VR headset](https://webvr.rocks)!

## Demo

View the [demo from the GitHub repo](https://hsudml.github.io/aframe/glitch/) or go to the [Glitch project](https://hsudml-aframe.glitch.me/) to view and remix.

### Aframe Components

Main components covered in this project and tutorial: 

Text 
* [Aframe text](https://aframe.io/docs/0.8.0/components/text.html#sidebar) (Aframe docs)
* [<a-text> primitive](https://aframe.io/docs/0.8.0/primitives/a-text.html#sidebar) (Aframe docs)

3D Models
* [Aframe 3D Models](https://aframe.io/docs/0.8.0/introduction/models.html#sidebar) (Aframd docs)
* [<a-obj-model> primitive](https://aframe.io/docs/0.8.0/primitives/a-obj-model.html#sidebar) (Aframe docs)

-------------
-------------

## TL;DR Docs (Cutting to the Chase)

*Note for Glitch users: upload your .obj and .mtl files to your assets.*

Here's the basic run-down:

### Model

Use the ```script.js``` file to customize your scene by entering what you want to change in the variables listed below.

* modelObj -> your .obj file URL 
* modelMtl -> your .mtl file URL

### Text

* topText -> the text that appears at the top of the screen.
* bottomText -> the text at the bottom.

*Notes about text:*
* *Leave blank if you don't want text.*
* *Don't use double quotes ```""``` because it will break the script. If you really need them, escape them with \ like:* ```\"Text\"```
* *Create line breaks with* ```\n```

### Background

The background and scenery is all created with the [aframe environment-component](https://github.com/supermedium/aframe-environment-component). It's fairly easy to use but requires a little experimentation to find all of the goodies. Try moving the light or changing the ground color to get started (line 85 in ```index.html```).

-------------
-------------

## Tutorial

If you are interested in remixing this but don't know where to start - you're here! This is a beginner [A-frame tutorial project](https://hsudml-aframe.glitch.me/) that you can start remixing following the instructions below. If you're not sure how to proceed, the easiest way to get into this project is to remix the [Glitch version](https://hsudml-aframe.glitch.me/) (go to this link and click on the fish in the upper right-hand corner and select 'Remix on Glitch.' It's free and you don't need to create an account - though all anonymous projects will get deleted in 5 days).

-------------

> :seedling: Video resource: [How to Remix a Glitch Project](https://youtu.be/OftgRaeyz48)

-------------

### Help

If you are getting confused or can't follow what's written in this description, don't panic. There will be links to videos, documentation and other resources along the way. Look for the seedling emoji: :seedling:, like the one above this paragraph. 

It's a reminder that your programming skills are growing and not to beat yourself up or get frustrated. It's also a reminder that sometimes when you're having problems and getting stuck that you may need a break. Every project will go more smoothly if you build in time to go outside and enjoy some nature or take a tea/coffee/snack break (anything that takes your mind off your project for a bit and gives you some relaxation).  

----------------------
----------------------

### Glitch Basics

The interface is fairly simple but it may look overwhelming at first. 

On the left-hand side you'll see the project name at the top of the screen, your profile next to a share button (from which you can collaborate with a friend in real time), the double arrow version control icon to rewind your project back in case you make some mistakes and need to go back to a stable version of your project, and then your files and assets. Assets include things like images or audio files that you'll use in your project. The files will include:
* your ```index.html``` file, which does most of the work in this A-frame project 
* your ```script.js``` file, which adds some simple click functionality, and
* the ```href.js``` file, which is a cool js library that someone smarter than me created so that we can add hyperlinks (click on an object and have it take you to a new URL)

In the top right-hand corner, you'll see your avatar with a drop-down menu for user options. 
* Change theme: Go from light background to dark. Totally personal preference, but if you're working for a long time with either, it may be nice to switch it up after a while to rest your eyes. In fact, I just set mine to dark because I've been typing a bunch today.
* Refresh app on changes: your live app will refresh with every change you make. This is handy when you're tweaking things and don't want to keep hitting F5 or ctrl+5 to refresh your page. It's annoying when you're using the A-frame Inspector (more on that later) and you want it to stay open while you tweak your code. The refresh will close the Inspector with every character you type.
* Wrap text: instead of having one line stretch outside of the bounds of your screen, any long line will wrap. This is really personal preference, but I like this one on.

Next to your avatar is the Glitch fish logo with a set of Glitch options that include more info about Glitch, new features, help forums, keyboard shortcuts and more.

The editor is the rest of the screen (most of the screen). Type in there and the changes are saved instantly. You may notice that you can't type in this file because it's written in [markdown](https://en.wikipedia.org/wiki/Markdown). If you want to edit this page, click the 'Markdown' button at the top of the page. Markdown is simpler than typing HTML. It's used in GitHub, too. There are a lot of markdown cheatsheets, but I like [Daring Fireball](https://daringfireball.net/projects/markdown/syntax) (by John Gruber, one of the creators of Markdown).

Other file types will be more straight-forward. Try clicking on the ```index.html``` file and go to line 4 and change the text inside the ```<title>``` and ```</title>``` tags to _Hello world_. Then open your live app by either hitting cmd+shift+r or the 'Show Live' button at the top of the page. The name of your site should now read "Hello world" in the tab. 

Go back to the ```index.html``` page and undo the new title. Hit ctrl+z a few times or check out the rewind version control by clicking on the double arrows in the left-hand menu toward the top. 

---------------
> :seedling: Learn more Glitch Rewind it from the [Glitch Rewind YouTube video](https://youtu.be/OftgRaeyz48). 

---------------

### A-frame Camera

For any programming language or library, the documentation is super important. A-frame is no different. To get started with this project, we are going to take a look at the camera, which is what dictates your view of the VR scene -- basically your viewer is seeing everything through the lens of a camera that is set in the middle of the scene. In this project's index.html page you'll see that the camera ```<entity>``` starts on line 21 and ends on line 29. It looks like this: 

```
  <a-entity position="0 1.75 0" rotation="1 0 0">
    <a-entity camera look-controls >
    </a-entity>
  </a-entity>
```
On that first line we have the position of the camera in 3D space. The numbers correspond to the X, Y and Z axes respectively. X and Z are both set to 0 and Y is set to 1.75. That means that the camera is 1.75 units above the floor (you can think of this as any unit - in VR units don't matter). Go ahead and set Z to 10 (Z is the last number). Now look at your scene (click the Show Live button at the top of this page). The camera is now 10 units farther away from your scene along the Z axis. Try the same with the X value and see what the change looks like. Now go back and reset the position values to 0, 1.75, and 0. 

#### 3D Position

When working with VR, you need to take a minute to think about 3D space. In the real world, we intuitively understand how objects can be closer or further from us and how to either move them closer to us or move ourselves closer to them. When you're working with VR, though, you need to think about this more concretely and specifically. In order to place objects and move them, we need to specify their locations in reference to our scene, which is centered on the 0 0 0 point. In A-frame, you'll see the object's position visualized like this: 

![Aframe screenshot of X, Y, and Z axes represented by color](https://cdn.glitch.com/94b51ca7-809c-4b84-b679-3fe26f090feb%2Faxes.png?1544560047277)

The red arrow represents the X-axis, the green arrow is the Y-axis and the blue arrow is the Z-axis. Where they intersect is the center point of the object, which is 0 0 0 in this case. The number values correspond to X Y Z, respectively. Let's try this in action.

-----------------
-----------------
-----------------
-----------------
### A-frame Inspector [deleted]
-----------------
-----------------
-----------------
-----------------

#### 3D Rotation

In VR systems, rotation is handled in a way that can seem counterintuitive. When an object like the library logo in the middle of the screen is rotated, the rotation is set relative to that object. The object has a front, back, top, bottom, left and right. To rotate it side to side, you would set it to rotate around the y-axis. To rotate top to bottom, you would set it to rotate around the x-axis. 

So far, this all makes sense -- as long as the object is oriented toward us. Try rotating it up and down using the up and down arrow keys. It should work as you'd expect. Now try rotating it side to side using the left and right arrow keys. This should still behave more or less as you'd expect. 

Now refresh the page (ctrl+R) and rotate the object using the right arrow key so that you're looking at a corner with the tree icon on the right and a blank green side on the left. Now rotate it up or down. Notice that the object rotates around our z-axis, but around it's own x-axis. So the arrow keys now don't necessarily behave how you'd expect. 

-----------------
-----------------

### Setting the Object

When you add a 3D model to Aframe, the first important thing to consider is it's own orientation. The object will have it's own front, back, top, bottom and left and right sides. So if you are trying to orient it in Aframe and then end up with some very confusing issues, try to keep in mind that you should be setting it's own orientation in the 3D modeling program you're using. 

#### 3D Model Formats

Aframe really only works with .glTF, .obj, and COLLADA files at this time. However, Aframe states that .glTF files are preferred. You can get .obj files easily from most 3D modeling programs. If you are unfamiliar with creating 3D models, check out [Tinkercad](https://www.tinkercad.com/) -- it's a great program for beginners and has a lot of [tutorials](https://www.tinkercad.com/learn/designs) and [models shared by other users](https://www.tinkercad.com/things) that you can download (like this [astronaut with a boombox](https://www.tinkercad.com/learn/designs)!).  

Go ahead and download a model in .obj format. This will give you a zipped file with two files inside: one .mtl file and one .obj file. The .mtl is the material or skin that goes around your model and provides the coloring. The .obj file is the shape of the model itself. You will need to upload both files to the Glitch Assets folder (left-hand menu at the top of the list of files). 

To add your model to the scene, you will add the file URLs to the ```script.js``` file. This file will load the URLs to the ```index.html``` file. *Note: if you update the index.html file directly, you will not see the updates because the script is overriding it. To ignore the script, simply delete the link to the script.js file on line 14.*

Open the ```script.js``` file and enter the URLs for the two files in the ```modelObj``` and ```modelMtl``` variables (lines 14 & 15). You should now see your project in place of the HSU Library logo. 

### Updating the HTML

If you chose to delete the reference to the ```script.js``` file (as outlined in the note above -- simply delete the ```<link>``` element pointing to the ```script.js``` on line 14 of ```index.html```), you will want to update the ```index.html``` page instead. This is the regular way to add entities to an Aframe project- one of the wonderful things about Aframe is that you can do a lot with the html alone. 

To link up your model in place of the HSU Library logo, add the URLs to your files to the ```<a-assets>``` element, starting on line 79. Paste the URL to your .obj file into the src attribute of the asset with the modelObj id. Do the same for your .mtl file and the asset with the modelMtl id. Now you should see your model in the project. If not, be sure that your project no longer links to the script.js file (you may want to delete that file as well). 

### Orienting the Model

How your model was created will dictate its orientation. You can change this by rotating the model, but this will cause your controls to be off, so if at all possible, re-orient your model in a 3D modeling program. 

-----------------

> :seedling: Check out [Aframe documentation on models](https://aframe.io/docs/0.8.0/introduction/models.html#sidebar) to get more info and find out how you can download openly-licensed models to use in your projects. 

-----------------
-----------------

### Text

To change the title and description text, we will again go into the ```script.js``` file. Here you will change the topText and bottomText variables (lines 11 & 12). Simply add the text you want between the double quotes for each line. 

#### Width

Depending on your text, you may need to adjust the width of your text. This is done by changing the ```width``` attribute in the ```<a-text>``` element in ```index.html```. 

If you look down at the bottom of your ```<a-scene>``` element, you will see the two ```<a-text>``` elements for your top and bottom text blocks. The ```value``` attribute is what text is displayed. This is overridden by our ```script.js``` script. The second attribute is ```width```. 

Width at top is 20, bottom is 4, both look the same --> positioning

## Notes about text

If you want to use double quotes, be sure to escape them with the forward slash \ like so: 

```var topText = "Tim's favorite book: \"Trail of Lightning\" by Rebecca Roanhorse";``` 
