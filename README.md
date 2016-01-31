# Smart Marketing Client
Platform that displays advertisements (Cross Platform)

 - Revolutionize the advertising market
 - Providing cheap Raspberry pie powered billboards which runs a digital advert
 - It has capability to determine the number of people actually looked at the advert. This is done through face recognition API’s. 
 - The analytics is then provided to the clients which can then analyze the best place to put the advert where people see it the most 
	
### How did you made it work?
Camera is connected to the client (laptop) through IP. The client side takes pictures every 10 seconds. These pictures are send to server where the API’s recognize the number of faces looking to the advert. This is meant to be run on Raspberry Pi with a built in camera. The stats are saved to the database and images are deleted. The statistics get displayed on the client side dashboard. We are using Haven for facial detection. 

### To Run
```npm install && node .```