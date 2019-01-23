ANIMATION


1. what is an animation???

ANS:- 

* Moving elements from one place to another gradually.

*  Earlier the most common solution for animation was jquery , but as the mobile devices usage grew performance became more and more important . Therefore css animations became more and more popular. 

* Over the time  Browsers matured and they offered more and more solutions , The most widely used solution is Css animation and transition .

* css animations run on GPU. Modern browsers try to offload task from cpu to gpu , 
if we use transform3d() or matrix3d()  then the browser gives this task to gpu. 

* We can do simple Animations without the use of Javascript.

2. why is animation necessary???

ANS:-

* To make website interactions feel more natural

*To make the user interaction (ux) more smooth and natural

* We can see that in the example demo.html.


***The browser refresh rate is 60frames/second. It means the screen refreshes 60 times in a sec tht is it paints the 
screen 60 times basically pixels because screen is made up of pixels.

4.CSS transitions ???

ANS:
  
* The idea of CSS transitions is simple. We describe a property and how its changes should be animated.

* When the property changes, the browser paints the animation.

* Example explained in the folder Transitions how we have applied transition to the properties background and        border-radius 

* There are 4 properties to describe CSS transitions 
     . transition-property //property 
     . transition-duration
     . transition-timing-function (flow of animation must be)
     . transition-delay
     We can declare them together like this:- property duration timing-function delay

  
 * transition-property: In transition-property we write a list of property to animate.

 5. Css 2D Transformations (Folder:-Transformation)
    
      * 4 things browser can animate cheaply are rotate,scale,translate and skew.If you animate anything else ,
      its at your own risk and the chances are you are not going to hit a silky smooth 60fps.

   1. Rotate 

   2.Scale

     * scale() takes only one parameter.

     * By default it is scale(1).

     * We can increase the scale like scale(1.1) and similarly decrease it like scale (0.2).

     * no negative values are allowed.

    3.Translate

       * it takes two parameters that is translate(X,Y).

       * ex:- translate(150px,0) this moves the element from left to right 150px and top to bottom 0px.

       * we can give negative values also.

    4. Skew

        * skew(20deg,0) takes 2 parameter.
                


  6. KEYFRAMES (Folder KeyFrames)

    *  keyframes let us define our own animations so it basically allows you to go from one css to another css.
    * Example the spinners are shown through keyframes.  




    ********



  Suppose the designer asks the developer to make a bouncing box :-suppose the designer 

    sample 1 =  https://codepen.io/pulpexploder/pen/apxRbK;

This is a good example but we can do better than that , we can see that when the box reaches the cornor on the top and bottom it feels like it hits a wall and then bounces up . 
We can optimize the timimg and see the ease function in javascript . 


An easy fix is to simply change the timing function to ease. This makes the beginning and ending of each animation a little slower than the middle part.

sample 2 = https://codepen.io/pulpexploder/pen/bgJmde;

This is good but we still do not have the bounce effect so for that  we can apply delay.

sample 3 = https://codepen.io/pulpexploder/pen/YNMJXb;

Now the box is bouncing rather than simply going up and down. This is very good but now we can make it better like 

sample 4 = https://codepen.io/pulpexploder/pen/YNMJyb;

By adding some subtle distortion to the scale of the box, we can add a lot to the animation.


   7. Debug the animation
      * Examples of animation Accordian and leftMenu. 

