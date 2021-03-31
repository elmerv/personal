
import React, { Component } from 'react'
import Pdf from '../documents/resume.pdf'
import Typical from 'react-typical'
export default class mainPage extends Component {


    render() {
        return (
            <>

            <div id = "topBanner"> 
      
                    <h1>
                        > Hello,{''}
                    <Typical loop = {Infinity} wrapper = "b" steps = {[
                        "welcome to my website.",
                        1000,
                        "I'm Elmer Vasquez.",
                        1000,
                        "I'm a Dev",
                        1000

                    ]}
                    />
                    </h1>

                    <img id = "typing" src= {require('./typingGif.gif')}/>
                    
            </div>

            <div id = "descriptionBanner">
                    <h1>About Me</h1>
                    <div id = "paragraph" >
                        <p>I'm currently a 2nd year studying computer science at UC Santa Cruz. I'm very passionate about using technology for social good. With the help of Teens Exploring Technology, my experience so far has involved teaching teens of color in South Central LA how to code and start their own startup. In my free time I enjoy playing LOL, watching politics on youtube, and watching anime. If you would like to contact me, I have my linkedin on the footer below. You can also email me at elfvasqu@ucsc.edu. 😸 </p>
                    </div>
            </div>


            
                <div id = "bottomBanner">
                    
                    <div className = "cell">
                        <a href = "https://github.com/elmerv" target = "blank">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.9781 4.17267C14.4539 4.1672 3.5 15.1156 3.5 28.6289C3.5 39.3149 10.3523 48.3985 19.8953 51.7344C21.1805 52.057 20.9836 51.1438 20.9836 50.5203V46.282C13.5625 47.1516 13.2617 42.2406 12.7641 41.4203C11.7578 39.7031 9.37891 39.2656 10.0898 38.4453C11.7797 37.5758 13.5023 38.6641 15.4984 41.6117C16.9422 43.75 19.7586 43.3891 21.1859 43.0336C21.4977 41.7485 22.1648 40.6 23.0836 39.7086C15.3945 38.3305 12.1898 33.6383 12.1898 28.0602C12.1898 25.3531 13.0813 22.8649 14.8313 20.8578C13.7156 17.5492 14.9352 14.7164 15.0992 14.2953C18.2766 14.011 21.5797 16.5703 21.8367 16.7727C23.6414 16.286 25.7031 16.0289 28.0109 16.0289C30.3297 16.0289 32.3969 16.2969 34.218 16.7891C34.8359 16.3188 37.8984 14.1203 40.8516 14.3883C41.0102 14.8094 42.2023 17.5766 41.1523 20.8414C42.9242 22.8539 43.8266 25.3641 43.8266 28.0766C43.8266 33.6656 40.6 38.3633 32.8891 39.7195C33.5495 40.3691 34.0739 41.1437 34.4317 41.9981C34.7894 42.8526 34.9733 43.7698 34.9727 44.6961V50.8485C35.0164 51.3406 34.9727 51.8274 35.793 51.8274C45.4781 48.5625 52.4508 39.4133 52.4508 28.6344C52.4508 15.1156 41.4914 4.17267 27.9781 4.17267Z" fill="#D0EBF6"/>
                        </svg>
                        <p>Github Repository</p>
                        </a>
                    </div>

                    <div className = "cell">
                        <a href = "https://www.linkedin.com/in/felmerv/" target = "blank">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.2 0H1.8C0.804375 0 0 0.804375 0 1.8V43.2C0 44.1956 0.804375 45 1.8 45H43.2C44.1956 45 45 44.1956 45 43.2V1.8C45 0.804375 44.1956 0 43.2 0ZM13.3481 38.3456H6.67125V16.8694H13.3481V38.3456ZM10.0125 13.9331C9.24709 13.9331 8.49886 13.7062 7.86244 13.2809C7.22602 12.8557 6.73 12.2513 6.43709 11.5441C6.14417 10.837 6.06754 10.0588 6.21686 9.30813C6.36619 8.55742 6.73477 7.86785 7.276 7.32662C7.81723 6.78539 8.50679 6.41681 9.2575 6.26749C10.0082 6.11816 10.7863 6.1948 11.4935 6.48771C12.2006 6.78062 12.805 7.27665 13.2303 7.91307C13.6555 8.54949 13.8825 9.29771 13.8825 10.0631C13.8769 12.2006 12.1444 13.9331 10.0125 13.9331ZM38.3456 38.3456H31.6744V27.9C31.6744 25.4081 31.6294 22.2075 28.2038 22.2075C24.7331 22.2075 24.1987 24.9187 24.1987 27.72V38.3456H17.5331V16.8694H23.9344V19.8056H24.0244C24.9131 18.1181 27.09 16.335 30.3413 16.335C37.1025 16.335 38.3456 20.7844 38.3456 26.5669V38.3456Z" fill="#D0EBF6"/>
                            </svg>

                            <p>LinkedIn</p>
                        </a>
                    </div>

                    <div className = "cell">
                        <a href = {Pdf} target = "blank">
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.9594 14.8219L29.8031 3.66562C29.4844 3.34687 29.1656 3.1875 28.6875 3.1875H12.75C10.9969 3.1875 9.5625 4.62187 9.5625 6.375V44.625C9.5625 46.3781 10.9969 47.8125 12.75 47.8125H38.25C40.0031 47.8125 41.4375 46.3781 41.4375 44.625V15.9375C41.4375 15.4594 41.2781 15.1406 40.9594 14.8219ZM28.6875 7.0125L37.6125 15.9375H28.6875V7.0125ZM38.25 44.625H12.75V6.375H25.5V15.9375C25.5 17.6906 26.9344 19.125 28.6875 19.125H38.25V44.625Z" fill="#D0EBF6"/>
                            <path d="M15.9375 35.0625H35.0625V38.25H15.9375V35.0625Z" fill="#D0EBF6"/>
                            <path d="M15.9375 25.5H35.0625V28.6875H15.9375V25.5Z" fill="#D0EBF6"/>np
                            </svg>

                        <p>Resume</p>
                        </a>
                    </div>

                </div>

            </>
        )
    }
}
