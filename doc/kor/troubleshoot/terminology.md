# 용어정리

## Quota

> 대부분의 컴퓨팅 환경에서 디스크 공간은 유한하다. Quota는 사용자 혹은 그룹이 가질 수 있는 node 수 또는 사용자나 그룹에서 할당된 디스크 Block 수를 제한함으로써, 디스크 저장 장치의 사용을 제한할 수 있게 해준다. 
> 각 사용자는 자신에게 부여된 디스크 제한 용량 이상으로 사용이 불가능하고, 이로써 디스크 사용의 효율을 보장한다.

## Tree Quota

> 사용자나 그룹이 아닌 디렉토리 단위로 파일 개수와 용량을 제한하는 방법이다.

## Volume Group(VG)
> LVM의 가장 기본적인 요소로써 일종의 가상 디스크를 뜻한다. 하나 이상의 실제 물리적으로 존재하는 블록 디바이스가 모여서 VG를 이루게 된다.

## Physical Volume(PV)

> 물리적인 블록 디바이스를 의미하며, 하드디스크 및 그 파티션, 소프트웨어/하드웨어 RAID 장치 등등 거의 대부분의 장치를 PV로 쓸 수 있다.

## Logical Disk(LD)

> 사용 가능한 하나 이상의 물리 디스크 장치들을 묶어서 하나의 논리 디스크로 사용이 가능하다.

## Logical Volume(LV)

> 가상 파티션이라고 할 수 있는데, VG를 가상으로 적당히 나누어 할당한 것을 말한다. 사용자는 이것을 일반 디스크나 파티션처럼 쓰면 된다.

## Section Zone

>해당 공유에 대해 읽기/읽기쓰기 등 전체적인 접근 권한을 제어하는 항목이다.

##AnyStor Manager

>AnyStor NAS를 관리하기 위한 웹 기반 GUI(Graphical User Interface)이다.

## Root Squashing

> 해당 디렉토리(볼륨)을 NFS 클라이언트의 루트 파일 시스템으로 마운트를 시킬 수 있도록 권한 설정

## CIFS(Common Internet File System)

> Unix 계열과 Windows 계열 시스템 간의 데이터 공유를 제공한다. AnyStor NAS는 Windows 플랫폼
에서 NAS 스토리지를 활용할 수 있도록 CIFS를 지원한다.

## NFS(Network File System)

> Unix 계열 시스템 간의 데이터 공유를 지원하는 프로토콜이다. NFS는 접근 그룹 및 사용자에 대한
접근 제어는 제공하지 않는다.

<br>