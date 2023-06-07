class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            nav {
                background-image: url(images/banner.jpg);
                background-size: cover;
                background-position: center;
                height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            nav ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
            
            nav li {
                height: 100%;
            }
            
            nav a {
                color: white;
                text-decoration: none;
                font-size: 16px;
                padding: 0 20px;
                height: 100%;
                display: flex;
                align-items: center;
            }
            
            nav a:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }
        </style>
        <header>
            <nav>
                <ul>
                    <a href="index.html">Home</a>
                    <a href="assets/resume.pdf">Resume</a>
                    <a href="nature.html">Nature</a>
                </ul>
            </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);

  class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            #footer {
                text-align: center;
                margin-top: 4em;
            }
        
            #footer a {
                color: inherit;
            }
        
            #footer:before {
                content: '';
                display: inline-block;
                width: 6em;
                height: 2px;
                background-color: #666666;
                margin-bottom: 4em;
            }
        
            #footer .copyright {
                font-size: 0.8em;
            }
        
            @media screen and (max-width: 736px) {
        
                #footer {
                    margin-top: 2em;
                }
        
                    #footer:before {
                        margin-bottom: 2em;
                    }
        
            }
        </style>
        <footer id="footer">
            <ul class="icons">
                <li><a href="https://github.com/devynduvall" class="icon fa-github"><span class="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/in/devynduvall/" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
                <li><a href="devynfduvall@gmail.com" class="icon fa-envelope"><span class="label">Email</span></a></li>
            </ul>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);