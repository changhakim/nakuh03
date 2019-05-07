DROP TABLE MEMBERS;
DROP TABLE FISHES;
DROP TABLE MEMBERFISH;
DROP TABLE RESERVATION;
DROP TABLE PRODUCTS;
DROP TABLE PRORES;
DROP TABLE FOLLOWERS;
DROP TABLE ARTICLES;
DROP TABLE COMMENTS;
DROP TABLE TAGS;
DROP TABLE POSTTAG;
CREATE TABLE MEMBERS
(
`mid`       VARCHAR(50) PRIMARY KEY COMMENT '고객아이디',
`password`  VARCHAR(50)     NOT NULL COMMENT '비밀번호',
`name`      VARCHAR(50)     NOT NULL COMMENT '이름',
`birth`     VARCHAR(100)    NOT NULL COMMENT '생년월일',
`mail`      VARCHAR(100)    NULL     COMMENT '이메일',
`phone`     VARCHAR(80)     NOT NULL COMMENT '휴대폰번호'
);
CREATE TABLE FISHES
(
`fishseq`   INT AUTO_INCREMENT PRIMARY KEY COMMENT '물고기번호',
`fishname`  VARCHAR(100)    NOT NULL    COMMENT '물고기이름',
`kind`      VARCHAR(100)    NOT NULL    COMMENT '물고기종류',
`habitat`   VARCHAR(100)    NOT NULL    COMMENT '서식지'
);
CREATE TABLE MEMBERFISH
(
`mfishseq`  INT               AUTO_INCREMENT PRIMARY KEY COMMENT  '멤버피쉬',
`len`       VARCHAR(50) NULL        COMMENT '길이',
`wei`       VARCHAR(50) NULL        COMMENT '무게',
`date`      VARCHAR(50) NULL        COMMENT '잡은날짜',
`mid`       VARCHAR(50) NOT NULL    COMMENT '고객아이디',
`fishseq`   INT         NOT NULL    COMMENT '물고기번호'
);
/*
ALTER TABLE Memberfish
ADD CONSTRAINT FK_Memberfish_mid_Member_mid FOREIGN KEY (mid)
REFERENCES Member (mid) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE Memberfish
ADD CONSTRAINT FK_Memberfish_fishseq_Fish_fishseq FOREIGN KEY (fishseq)
REFERENCES Fish (fishseq) ON DELETE RESTRICT ON UPDATE RESTRICT;
*/
CREATE TABLE RESERVATION
(
`resnum`   INT AUTO_INCREMENT PRIMARY KEY COMMENT '예약번호',
`mid`      VARCHAR(50)    NOT NULL    COMMENT '아이디',
`resname`  VARCHAR(50)    NOT NULL    COMMENT '예약자명',
`startdate` VARCHAR(50)    NOT NULL    COMMENT '출발일자',
`ampm`      VARCHAR(100)    NOT NULL    COMMENT 'AM/PM',
`phone`     VARCHAR(50)    NOT NULL    COMMENT '연락처',
`mid`      VARCHAR(50)    NOT NULL    COMMENT '예약일자',
`mid`      VARCHAR(50)    NOT NULL    COMMENT '예약인원',
`deposit`  VARCHAR(70)    NOT NULL    COMMENT '결제금액',
`message`  VARCHAR(200)   NOT NULL    COMMENT '업체전달사항',
`proname`  VARCHAR(50)    NOT NULL    COMMENT '상품이름',
`pronum`   INT            NOT NULL    COMMENT '상품번호'
);
CREATE TABLE PRODUCTS
(
`pronum`    INT AUTO_INCREMENT PRIMARY KEY COMMENT '상품번호',
`proname`   VARCHAR(100)    NOT NULL    COMMENT '상품명',
`price`     VARCHAR(100)    NOT NULL    COMMENT '가격',
`company`   VARCHAR(100)    NOT NULL    COMMENT '업체명',
`address`   VARCHAR(100)    NOT NULL    COMMENT '주소',
`category`  VARCHAR(40)     NOT NULL    COMMENT '카테고리',
`proimg`    VARCHAR(45)     NOT NULL    COMMENT '상품이미지',
`regidate`  VARCHAR(70)     NOT NULL    COMMENT '등록날짜',
`fishname`  VARCHAR(70)     NULL        COMMENT '어종',
`phone`  VARCHAR(70)        NULL        COMMENT '연락처',
`minimum`  VARCHAR(70)      NULL        COMMENT '최소인원',
`maximum`  VARCHAR(70)      NULL        COMMENT '최대인원'
);
/*
ALTER TABLE Reservation
ADD CONSTRAINT FK_Reservation_mid_Member_mid FOREIGN KEY (mid)
REFERENCES Member (mid) ON DELETE RESTRICT ON UPDATE RESTRICT;
*/
CREATE TABLE FOLLOWERS
(
`folloseq`  INT AUTO_INCREMENT PRIMARY KEY COMMENT '팔로우시퀀스',
`folloid`   VARCHAR(45)    NOT NULL    COMMENT '팔로우한아이디',
`mid`       VARCHAR(50)    NOT NULL    COMMENT '고객아이디'
);
/*
ALTER TABLE Follower
ADD CONSTRAINT FK_Follower_mid_Member_mid FOREIGN KEY (mid)
REFERENCES Member (mid) ON DELETE RESTRICT ON UPDATE RESTRICT;
*/
CREATE TABLE ARTICLES
(
`artnum`    INT AUTO_INCREMENT PRIMARY KEY COMMENT '글번호',
`content`   VARCHAR(300)    NOT NULL    COMMENT '콘텐츠',
`artdate`   VARCHAR(80)     NOT NULL    COMMENT '작성일',
`artphoto`  VARCHAR(45)     NOT NULL    COMMENT '사진',
`extension` VARCHAR(50)     NOT NULL    COMMENT '확장자',
`mid`       VARCHAR(50)     NOT NULL    COMMENT '아이디'
);
/*
ALTER TABLE Article
ADD CONSTRAINT FK_Article_mid_Member_mid FOREIGN KEY (mid)
REFERENCES Member (mid) ON DELETE RESTRICT ON UPDATE RESTRICT;
*/
CREATE TABLE COMMENTS
(
`commseq`   INT AUTO_INCREMENT PRIMARY KEY COMMENT '댓글번호',
`titleseq`  INT NOT NULL  COMMENT '글번호',
`comm`      VARCHAR(100) NOT NULL  COMMENT '댓글내용'
);
/*
ALTER TABLE Comment
ADD CONSTRAINT FK_Comment_titleseq_Article_artnum FOREIGN KEY (titleseq)
REFERENCES Article (artnum) ON DELETE RESTRICT ON UPDATE RESTRICT;
*/
CREATE TABLE TAGS
(
`tagname`  VARCHAR(70) NOT NULL PRIMARY KEY COMMENT '태그명'
);
CREATE TABLE POSTTAG
(
`ptseq`    INT AUTO_INCREMENT PRIMARY KEY COMMENT '포스트태그 시퀀스',
`artseq`   INT NOT NULL    COMMENT                     '글번호',
`tagname`  VARCHAR(70)    NOT NULL    COMMENT '태그명'
);
CREATE TABLE VISITOR
(
`VISITSEQ`   INT AUTO_INCREMENT PRIMARY KEY COMMENT '방문자시퀀스',
`VISITID`  VARCHAR(100)    NOT NULL    COMMENT '방문자아이디',
`VISITTIME`      VARCHAR(100)    NOT NULL    COMMENT '방문시간'
);
/*
ALTER TABLE Posttag
ADD CONSTRAINT FK_Posttag_artseq_Article_artnum FOREIGN KEY (artseq)
REFERENCES Article (artnum) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE Posttag
ADD CONSTRAINT FK_Posttag_tagname_Tag_tagbane FOREIGN KEY (tagname)
REFERENCES Tag (tagbane) ON DELETE RESTRICT ON UPDATE RESTRICT;
*/
COMMIT;    