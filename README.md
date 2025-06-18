Testing Overview Document:

Below are the scenarios that I came up with, divided into two tiers.  The first tier of tests validate successful login and PW reset request, and also error handling for negative cases where there's missing information or the user has no authorization (ideally Test #4 uses credentials from an user who has been inactivated).  To complete Test #5 as an end-to-end test, we should go through the entire PW reset flow to verify that this functionality is working as expected (e.g. email is received, user can reset/login/etc).  I hit time constraints before I could automate Test #3 and Test #7, so these are manual for now.

The second tier of tests are intended to be manual checks; these tests are still valuable but provide less value when it comes to automation and could be skipped.  Tests #8 and #9 expand upon Test #2 (which is automated).  Tests #10 and #11 expand upon Test #4 (which is automated).  I would feel comfortable leaving these as manual checks given our Tier 1 automated coverage. 



*Tier 1 Scenarios/Automated Tests*

1. Verify successful login (test assumes valid login credentials):
   
    A.  Expected result = successful login.

2. Verify error for missing both email and password:

    A.  Expected result = 'Please fill out all fields' and 'Please login using your E-mail address' errors displayed.

3. Verify error when email is incorrectly formatted (*NOTE: I ran out of time before I could automate this test case*):

   A.  'Please login using your E-mail address' error displayed.

4. Verify error for incorrect credentials/no auth:

   A.  Expected result = 'Authentication Failed' error displayed.

5. Verify successful Reset Password submission:

   A.  Expected result = 'Your request has been received' message displayed after successful submission.

   B.  Manually complete of the Forgot PW flow.

6. Verify error when clicking Reset Password without an email:

    A.  Expected result = 'Please provide an E-mail address' error displayed.

7. Verify "Back to login" button (*NOTE: I ran out of time before I could automate this test case*):

    A.  Expected result = user is brought back to the login form.




*Tier 2 Scenarios/Manual Checks*

8. Verify error when missing just email (pw field is populated):

   A.  Expected result = 'Please fill out all fields' and 'Please login using your email address' error displayed.

9. Verify error when missing just password (email field is populated): 

   A.  Expected result = 'Please fill out all fields' error displayed.

10. Valid Email/Invalid PW:

     A.  Expected result = 'Authentication Failed' error displayed.

11. Invalid Email/Valid PW:

     A.  Expected result = 'Authentication Failed' error displayed.




