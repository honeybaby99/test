## 2.2 AnyStor 500의 시작

### 2.2.1 AnyStor 500 RAID 설정

AnyStor 500은 단위 디스크들을 RAID로 구성하여 서비스를 수행합니다.
<br><br>
본절에서는 “RAID-5” 및 “RAID-5 + 스페어 디스크(Spare 디스크)”를 형태로 RAID를 구성하는 방법을 기술합니다. 
스페어 디스크를 포함하여 RAID를 구성하면 디스크 오류 시 오류난 디스크의 내용을 스페어 디스크에 자동으로 복구하기 때문에 AnyStor 500의 안정성을 한층 높일 수 있습니다.

+ **단, RAID 구성은 데이터의 안정성과 직접적으로 관련된 부분이므로 꼭 본사 기술지원의 협조를 받으시기 바랍니다.**

### 2.2.2 AnyStor 500 초기 설정

AnyStor 100/500은 O/S 설치 시 입력한 IP를 초기값으로 가지고 있습니다. 해당IP를 웹브라우저로 접
속하면 AnyStor 관리툴이 구동되고, 장비 설정이 가능합니다.

+ **로그인 및 네트워크 설정은 Chaper3의 1 장과 4 장을 참고해 주시기 바랍니다.**

### 2.2.3 AnyStor 500 스토리지 구성
AnyStor 100/500은 제품 출하 시 각 디스크를 H/W적으로 가상 볼륨으로 구성되어 있습니다.

+ **디스크 증설이나 RAID Level 변경 시 Data유실이 발생할 수 있으므로 필요 시 당사에 문의 바랍니다.**


<br>