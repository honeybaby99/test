# 7.6  유지관리

시스템의 유지 보수를 위한 메뉴입니다. 시스템의 유지 보수는 시스템 설정 파일의 백업 및 복구, 시스템 로그 백업, 시스템 온라인 업그레이드 기능을 포함합니다.

![\[ &#xADF8;&#xB9BC; 7.6 &#xC2DC;&#xC2A4;&#xD15C; &#xC720;&#xC9C0;&#xAD00;&#xB9AC; &#xD654;&#xBA74; \]](../.gitbook/assets/maintenance.png)

## 7.6.1 시스템 설정 파일 백업

시스템에 이상이 발생할 경우 시스템을 원상태로 복귀시키기 위해서는 기존의 시스템 설정 파일들이 필요합니다. AnyStor NAS는 시스템 설정 파일 백업 기능을 제공하여 시스템에 이상이 발생하여도 예 전 시스템 설정을 처음부터 다시 수행하지 않고 간단히 원래의 설정을 복구할 수 있도록 하는 기능을 제공합니다. 단 시스템의 안정성 문제때문에 볼륨정보는 백업하지 않습니다. 결국 시스템 설정 정보를 복구해도 그 당시에 설정되어 있는 볼륨정보는 변경하지 않게 됩니다.   
  
 시스템 설정 파일 백업은 다음과 같은 순서로 수행합니다. 

![\[ &#xADF8;&#xB9BC; 7.6.1 &#xC2DC;&#xC2A4;&#xD15C; &#xC124;&#xC815; &#xD30C;&#xC77C; &#xBC31;&#xC5C5;\(&#xD30C;&#xC77C; &#xC0DD;&#xC131;\) \]](../.gitbook/assets/systembackup1.png)

> A. **“생성”** 버튼을 클릭하면 위와 같이 생성된 날짜가 표시되며 **“download”** 이라는 버튼이 생깁니다.
>
> B. **“download”**을 클릭하면 파일을 열거나 저장할 수 있는 메시지가 출력됩니다. 파일이름 은 **‘SysConfig월-일-년도.cfg’** 로 구성되어 있습니다.

![\[ &#xADF8;&#xB9BC; 7.6.2 &#xC2DC;&#xC2A4;&#xD15C; &#xC124;&#xC815; &#xD30C;&#xC77C; &#xC800;&#xC7A5; \]](../.gitbook/assets/systembackup2.png)

## 7.6.2 시스템 설정 구성 복구

시스템에 이상이 발생한 경우 백업된 시스템 설정 파일을 이용하여 시스템을 원상태로 복구 시킬 수 있습니다. 시스템을 원래대로 복구 시키기 위해서는 다음 과정을 수행합니다.

![\[ &#xADF8;&#xB9BC; 7.6.3 &#xC2DC;&#xC2A4;&#xD15C; &#xC124;&#xC815; &#xD30C;&#xC77C; &#xBCF5;&#xAD6C; \]](../.gitbook/assets/systembackup3.png)

> A. \[시스템\]-\[유지관리\] 메뉴로 이동합니다.
>
> B. **“시스템 유지관리”** 항목에서 **“구성 복구”**에 해당하는 **“찾아보기”** 버튼을 클릭합니다. 파 일 검색 창에서 기존에 백업 되어있는 시스템 설정 파일의 최신 본을 선택하고 확인 버 튼을 클릭합니다.
>
> C. **“수행”** 버튼을 클릭하여 시스템 설정파일 복구를 수행합니다.

## 7.6.3시스템 로그파일 백업

![\[ &#xADF8;&#xB9BC; 7.6.4 &#xB85C;&#xADF8;&#xD30C;&#xC77C; &#xBC31;&#xC5C5; \]](../.gitbook/assets/systembackup4.png)

> A. 로그 백업의 **“생성”** 버튼을 클릭하여 로그 파일을 생성하면 위와 같이 생성날짜와 **“download”**라는 버튼이 생깁니다.
>
> B. **“download”**을 클릭하면 파일을 열거나 저장할 수 있는 메시지가 출력됩니다. 파일이름은 **‘Sys로그월-일-년도.AnyStorLog’** 로 구성되어 있습니다.

![\[ &#xADF8;&#xB9BC; 7.6.5 &#xB85C;&#xADF8; &#xBC31;&#xC5C5;&#xD30C;&#xC77C; &#xC800;&#xC7A5; \]](../.gitbook/assets/systembackup5.png)

## 7.6.4 시스템 업그레이드

AnyStor NAS는 온라인 업그레이드 기능을 제공합니다. 새로운 업그레이드 파일을 이용하여 시스템의 업그레이드를 수행할 수 있습니다. 업그레이드를 수행하는 순서는 다음과 같습니다.

> ① 업그레이드 파일을 구합니다\(웹에서 다운로드 받거나, CD롬으로 배포 예정\)
>
> ② **“버전 업그레이드”** 항목에서 “찾아보기” 버튼을 클릭하여 해당 업그레이드 파일을 선택합니다.
>
> ③ **“수행”** 버튼을 클릭하여 시스템 업그레이드를 수행합니다.

![\[ &#xADF8;&#xB9BC; 7.6.6 &#xC2DC;&#xC2A4;&#xD15C; &#xC5C5;&#xADF8;&#xB808;&#xC774;&#xB4DC; \]](../.gitbook/assets/systembackup6.png)

* **※ NOTE**

  업그레이드 기능의 종류에 따라 시스템 리부팅을 필요로 할 수 있습니다. 시스템을 리부팅 해야 할 경우 반

  드시 현재 수행되고 있는 서비스를 확인 후 리부팅을 수행하십시오.
