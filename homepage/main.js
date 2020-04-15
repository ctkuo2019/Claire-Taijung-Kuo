
            let x = 0;
            document.querySelector('#daynight').onclick = function() {
                if (x == 0)
                    {
                        document.querySelector('body').style.color = '#000';
                        document.querySelector('body').style.backgroundImage = "url(images/websitebg3.jpg)";
                        document.querySelector('#intro').style.opacity=0.85;
                        x = 1;
                    }
                else
                {
                    document.querySelector('body').style.color = 'gainsboro';
                    document.querySelector('body').style.backgroundImage = "url(images/websitebg.jpeg)";
                    document.querySelector('#intro').style.opacity=1;
                    x = 0;
                }   
            }
