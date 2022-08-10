## 개요
- 실시간 iot data stream을 kafka broker로 전송하는 sample을 작성한다.


## 적용시 기대되는 개선점
- 무거운 데이터 분석을 로컬에서 처리하지 않아도 된다.
- kafka connect를 이용하여 손쉽게 연구목적 데이터를 export 할 수 있음.
- bulk upload를 이용하여 기존보다 부하를 줄일 수 있음



## Kafka Topic Naming Convention
- 기기에서 가져온 데이터의 경우, 네이밍을 아래와 같이 따른다.
  - <APP_NAME>.<DATA_SOURCE_NAME>.<IOT_DEVICE_IDENTIFIER>.<DATA_TYPE>.<DATA_NAME>.<VERSION>
- 그 외 kubernetes 등 log성의 데이터는 아래와 같이 따른다.
  - <APP_NAME>.logs.<PLATFORM_NAME>.<METRIC_NAME>.<VERSION>
- 

## Kafka 정책
- 기존의 convention을 해칠 수 있기 때문에 임의로 topic을 생성할 수 없다.
  - Topic은 개발자 간 협의를 한 후 결정
- Topic의 Partition의 수는 producer, consumer의 수 및 처리량에 따라 달라진다.
- 재해 복구를 할 수 있도록 최소 2개의 follower를 두어야 한다.
