# How to set up relay <span style="color:red;font-weight:700;">UNFINISHED</span>

### Step 1: Create Cloudflare account

Go to the [Cloudflare Dashboard](https://dash.cloudflare.com) and create an account.

### Step 2: Create the Worker

After you get to the dashboard, click on the _"Workers and Pages"_ section in the navbar on the right:

![Step 2 Image 1](./_media/Screenshot%202024-07-10%20at%2002-56-52%20edit01.png)

Then click on the _"Create"_ Button to create a worker:

![Step 2 Image 2](./_media/Screenshot%202024-07-10%20at%2002-56-52%20edit02.png)

Select a default _"Hello World"_ worker template:

![Step 2 Image 3](./_media/Screenshot%202024-07-10%20at%2003-00-58%20edit01.png)

When asked for a name, you can either keep the default random one, or enter your own.

Copy the url somewhere, that will be teh url you paste in this website's code.

![Step 2 Image 4](./_media/Screenshot%202024-07-10%20at%2003-02-17%20edit01.png)

Then _deploy_ the worker:

![Step 2 Image 5](./_media/Screenshot%202024-07-10%20at%2003-02-17%20edit02.png)

<sup>_Note: It might take a little while to deploy, just keep the tab open._</sup>

### Step 3-1: Paste the code

Now press the _"Edit code"_ button. If you Accidentally closed the tab, or lost this confirmation site in any way, coutinue with [Step 4](#step-3-2-update-the-code).

![Step 3 Image 1](./_media/Screenshot%202024-07-10%20at%2003-12-57%20edit01.png)

### Step 3-2: Update the code

If you want to update or modify the code in any way **after it's already been deployed**, do the following:

Open the [Cloudflare Dashboard](https.//dash.cloudflare.com) and navigate to the _Workers_ section.

![Step 2 Image 1](./_media/Screenshot%202024-07-10%20at%2002-56-52%20edit01.png)

Then click on your worker to open its overview.

On a workers overview, press the _"Edit code"_ button to bring up the online code editor.

![Step 4 Image 1](./_media/Screenshot%202024-07-10%20at%2003-29-30%20edit01.png)

Now, continue with ()

<span style="color:red;font-size:48px;font-weight:900;">Todo: add env. variable explanation here</span>

### Step 4: Replace the code

First, edit the code on the left:

![Step 4 Image 1](./_media/Screenshot%202024-07-10%20at%2003-32-19%20edit01.png)

Afterwards, test your edits by clicking _"Send"_, and observing the results:

![Step 4 Image 2](./_media/Screenshot%202024-07-10%20at%2003-32-19%20edit02.png)

When you're done editing, and you are pleased with the result, click _"Deploy"_.

![Step 4 Image 3](./_media/Screenshot%202024-07-10%20at%2003-36-04%20edit01.png)
![Step 4 Image 4](./_media/Screenshot%202024-07-10%20at%2003-36-04%20edit02.png)

<u>Now the code is deployed, and you can use the link in this website.</u>
