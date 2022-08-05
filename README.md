# Kafka IOT DataPipeline

실시간 데이터 전송 및 분석을 위한 데이터 파이프라인을 작성하고, 언제든 분석할 수 있도록 cloud storage에 archiving 한다.




## Requirements
- Docker
- Nestjs
- nodeJS 16.16.0
- GCP Cloud Storage or AWS S3
- 

## Project 구성

### Producer
실제 IOT 데이터를 받아서 Broker로 전송하는 역할을 한다. 
이 부분은 kafka connect로 쉽게 구성할 수 있을 것으로 보이지만, 초기 세팅은 직접 producer를 이용하여 실시간 전송하는 쪽으로 진행한다.

### Broker
여러 Producer로부터 받은 데이터를 클러스터에 저장하고, offset를 이용하여 어디까지의 데이터가 처리되었는지 관리한다.
별도의 테스트용 broker를 외부 api에 구성을 해놓은 상태이다.

### Consumer
Broker부터 offset를 참조하여 데이터를 받은다음, 통계 및 분석 등 데이터 처리를 한다.
