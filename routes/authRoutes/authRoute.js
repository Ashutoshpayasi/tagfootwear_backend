const express = require('express');
const router = express.Router();

const {registerUser,
       login,
      }=require('../../controller/authController/authController');

 /*------------------------register routes--------------------------------*/
//registering user
router.route('/auth/register')
.post(registerUser);


/*------------------------login routes--------------------------------*/
//user login route
router.route('/auth/login')
.post(login);
//getting all users
 
//

router.get(
     '/auth/google',
     passport.authenticate('google', { scope: ['profile'] })
   );
   
   // Google OAuth callback route
   router.get(
     '/auth/google/callback',
     passport.authenticate('google', { failureRedirect: '/login' }),
     (req, res) => {
       // Successful authentication, redirect home or handle as needed
       res.redirect('/');
     }
   );
   

module.exports=router;