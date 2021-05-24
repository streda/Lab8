# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   
- Choice B
 
2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

- Yes, We can write a message, press the button and we make sure that now it exists on the page.
  

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   
- Yes, We can type and send a message and check if the message comes out as a 80 character. After the 80th character it will not allow you to add more characters. We can test to make sure that it is at the max message length whent it is received on the page.
  
4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

- Setting the "headless" to true would mean that it wouldn't launch the browser at all. It would just run the test in the background, and we wouldn't never see a browser window pop open.
  
5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

- We would just click the settings button inside the beforeall using the click that we have been using. 

