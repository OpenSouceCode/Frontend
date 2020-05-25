import Router from 'next/router'
import React from 'react';

import styles from '../../css/home.module.css';
import firebase from '../../firebase'

export default function WelcomeComponent() {


  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();

    /*
        Define Required  Scopes here
    */

    firebase.auth().signInWithPopup(provider).then((result) => {
      //  Access Token for using Google API's
      const token = result.credential.accessToken;
      //  Signed-in user info.
      const { user } = result;
      // eslint-disable-next-line no-console
      console.log("Token : ", token);
      // eslint-disable-next-line no-console
      console.log("User : ", user);

      /*
          Redirect to the required page here 
      */

     Router.push('/feed');

    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
  }

  const handleGithubSignIn = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GithubAuthProvider();


    /*
       Define Required  Scopes here
   */

    firebase.auth().signInWithPopup(provider).then((result) => {
      //  Access Token for using github api
      const token = result.credential.accessToken;
      //  Signed-in user info.
      const { user } = result;
      // eslint-disable-next-line no-console
      console.log(user, token);

      /*
          Redirect to the required Page here 
      */
      Router.push('/feed');
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
  }

  return (
    <div className={styles['welcome-container']}>
      <div className={styles['welcome-left']}>
        <h1 className={styles['welcome-title']}>
          Welcome To <br />
          Open Source Code Platform
        </h1>
        <p className={styles['landing-text']}>
          Search and Contribute to Some of the Best
          <br />
          Open Source Projects
        </p>

        <div className={styles['sign-in-buttons']}>
          <button className={styles['github-button']} type="submit" onClick={handleGithubSignIn}>
            <img
              alt="Icon-awesome-github.png"
              src="/images/Iconawesome-github.png"
            />
            <p>Sign in with Github</p>
            <img alt="Right-Arrow.svg" src="/icons/arrow-right.png" />
          </button>

          <button className={styles['google-button']} type="submit" onClick={handleGoogleSignIn}>
            <img alt="Icon-simple-google" src="/images/google.svg" />
            <p>Sign in with Google</p>
            <img alt="Right-Arrow.svg" src="/icons/arrow-right.png" />
          </button>
        </div>
      </div>

      <div className={styles['welcome-right']}>
        <img alt="how-right-SVG.png" src="/images/welcome-right-svg.svg" />
      </div>
    </div>
  );
}
