Agile, Self-Managed, and Zero-Cost Architecture Strategy ($0 USD)

# **Technical Proposal: Personal Blog Development**

This document summarizes the proposed technology architecture for creating your friend's blog. The main approach is designed to meet two key pillars: **maximum ease of use for the writer** and a **monthly maintenance cost of $0 USD**, leveraging the best free plans in the current development ecosystem.

## **1. The Project Approach: Static Sites (Jamstack)**

Instead of using traditional, heavyweight systems like WordPress (which require 24/7 active servers and databases that generate monthly costs), we will use a modern architecture based on pre-generated pages. When your friend publishes an article, the site will be automatically compiled into ready-to-read files.


#### **Key Benefits for the Project:**

- **Extreme Speed:** By not relying on an active database to load the page, the website will open almost instantly for readers.

- **Guaranteed Zero Cost:** Modern platforms do not charge for storing and serving these types of low-volume static pages.

- **Total Security:** Without a vulnerable administration panel exposed directly on the web server, it is virtually impossible for the site to be hacked.

## **2. Proposed Infrastructure (No-Cost Architecture)**

To achieve the simple interface your friend needs without spending money, we will separate the site into two independent components that communicate with each other:

|**Component**|**Platform**<br>**Suggested**|**Role in the Project**|**Cost**<br>**Monthly**|

---|---|---|---|

|**Hosting &**<br>**Infrastructure**|Vercel (Hobby Plan)|Hosts the website in the cloud and processes user visits.|**$0 USD**|

**Control Panel**<br>**(CMS)**|Sanity.io or Contentful|User-friendly interface where your friend will log in to write and upload images.|**$0 USD**|

## **3. Editorial Panel Options for Your Friend**

Your friend will have private web access (with username and password) to manage their posts. Here are two excellent options to choose how they want their workspace to look:

### **Option A: Sanity.io (Developer Recommended)**

- **What the experience is like:** A minimalist, modern, and very fluid interface. Allows dragging and dropping images directly from the computer into the browser.

- **Hidden Technical Advantage:** It has native optimization tools. If your friend uploads a very large image, the platform will automatically process it to avoid unnecessary storage data consumption.

### **Option B: Contentful**

- **Experience:** It has a structure more reminiscent of classic blog editors (WordPress style). It's heavily focused on clear text fields (Title, Body, Featured Image).

- **Consideration:** It's very intuitive if you already have experience with other blogging platforms, although its storage limits in the free tier are a bit stricter than Sanity's.

## **4. Image Limit Management**

The main condition for keeping the project 100% free is that each post includes a maximum of **1 or 2 images**. To protect the long-term stability of the free plan, the code development will natively include:

1. **Automatic Conversion to Modern Web Formats:** Even if your friend uploads photos in standard format (.JPG or .PNG), the system will convert them to high-compression formats without loss of quality (such as .WebP), reducing their size by up to 70%.

2. **Lazy Loading:** Images will only be downloaded when the reader scrolls down to them, saving bandwidth for both the site and the visitor's data plan.

## **5. Next Steps**

Once your friend evaluates this proposal and chooses the panel option they find most comfortable for writing, we will proceed to define the development framework (the technology for programming the blog's display) and begin designing the database in the chosen CMS.