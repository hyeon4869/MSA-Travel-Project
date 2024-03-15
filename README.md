# 

## Model
www.msaez.io/#/storming/untitled-3

## Before Running Services
### Make sure there is a Kafka server running
```
cd kafka
docker-compose up
```
- Check the Kafka messages:
```
cd infra
docker-compose exec -it kafka /bin/bash
cd /bin
./kafka-console-consumer --bootstrap-server localhost:9092 --topic
```

## Run the backend micro-services
See the README.md files inside the each microservices directory:

- payment
- flightReservation
- user
- myPage
- flight
- lodging
- lodgingReservation


## Run API Gateway (Spring Gateway)
```
cd gateway
mvn spring-boot:run
```

## Test by API
- payment
```
 http :8088/payments id="id" charge="charge" userId="userId" reservationId="reservationId" name="name" impUid="imp_uid" status="status" 
```
- flightReservation
```
 http :8088/flightReservations id="id" airLine="airLine" arrAirport="arrAirport" depAirport="depAirport" arrTime="arrTime" depTime="depTime" charge="charge" vihicleId="vihicleId" status="status" userId="userId" name="name" flightId="FlightId" email="email" reservaionHash="reservaionHash" 
```
- user
```
 http :8088/users id="id" name="name" username="username" password="password" refreshToken="refreshToken" roles="roles" 
```
- myPage
```
```
- flight
```
 http :8088/flights id="id" airLine="airLine" arrAirport="arrAirport" depAirport="depAirport" arrTime="arrTime" depTime="depTime" charge="charge" vihicleId="vihicleId" seatCapacity="seatCapacity" 
```
- lodging
```
 http :8088/lodgings id="id" addr1="addr1" addr2="addr2" contentId="contentId" contentTypeId="contentTypeId" createdTime="createdTime" image="Image" thumbNail="thumbNail" phoneNumber="phoneNumber" title="title" sigunguCode="sigunguCode" areaCode="areaCode" mapX="mapX" mapY="mapY" mLevel="mLevel" modifiedTime="modifiedTime" 
 http :8088/lodgingDetails id="id" contentid="contentid" contenttypeid="contenttypeid" createdtime="createdtime" title="title" modifiedtime="modifiedtime" tel="tel" telname="telname" homepage="homepage" firstimage="firstimage" firstimage2="firstimage2" areacode="areacode" sigungucode="sigungucode" addr1="addr1" addr2="addr2" mapx="mapx" mapy="mapy" overview="overview" 
 http :8088/rooms id="id" contentid="contentid" contenttypeid="contenttypeid" roomcode="roomcode" roomtitle="roomtitle" roomsize="roomsize" roomcount="roomcount" roombasecount="roombasecount" roommaxcount="roommaxcount" roomoffseasonminfee1="roomoffseasonminfee1" roomoffseasonminfee2="roomoffseasonminfee2" roompeakSeasonMinfee1="roompeakSeasonMinfee1" roompeakseasonminfee2="roompeakseasonminfee2" roomintro="roomintro" roombathfadility="roombathfadility" roombath="roombath" roomhometheater="roomhometheater" roomaircondition="roomaircondition" roomtv="roomtv" roompc="roompc" roomcable="roomcable" roominternet="roominternet" roomrefrigerator="roomrefrigerator" roomtoiletries="roomtoiletries" roomsofa="roomsofa" roomcook="roomcook" roomtable="roomtable" roomhairdryer="roomhairdryer" roomsize2="roomsize2" roomImg1="roomImg1" roomImg1Alt="roomImg1alt" roomImg2="roomImg2" roomImg2Alt="roomImg2alt" roomImg3="roomImg3" roomImg3Alt="roomImg3alt" roomImg4="roomImg4" roomImg4Alt="roomImg4alt" originImgurl="originImgurl" imgname="imgname" smallimageurl="smallimageurl" roomCapacity="roomCapacity" 
 http :8088/lodgingIntros id="id" contentid="contentid" contenttypeid="contenttypeid" roomcount="roomcount" roomtype="roomtype" refundregulation="refundregulation" checkintime="checkintime" checkouttime="checkouttime" chkcooking="chkcooking" parkinglodging="parkinglodging" 
```
- lodgingReservation
```
 http :8088/lodgingReservations id="id" name="name" reservationDate="reservationDate" email="email" category="category" charge="charge" roomCode="roomCode" status="status" userId="userId" 
```


## Run the frontend
```
cd frontend
npm i
npm run serve
```

## Test by UI
Open a browser to localhost:8088

## Required Utilities

- httpie (alternative for curl / POSTMAN) and network utils
```
sudo apt-get update
sudo apt-get install net-tools
sudo apt install iputils-ping
pip install httpie
```

- kubernetes utilities (kubectl)
```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

- aws cli (aws)
```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

- eksctl 
```
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin
```

