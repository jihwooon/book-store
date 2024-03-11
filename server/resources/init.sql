use BookStore;

-- set Foreign key = 0
set FOREIGN_KEY_CHECKS = 0;

-- truncate tables
TRUNCATE BookStore.books;
TRUNCATE BookStore.category;
TRUNCATE BookStore.likes;
TRUNCATE BookStore.users;
TRUNCATE BookStore.cartItems;
TRUNCATE BookStore.delivery;
TRUNCATE BookStore.orders;
TRUNCATE BookStore.orderedBook;

-- insert Data
INSERT INTO BookStore.category (name) VALUES ('소설');
INSERT INTO BookStore.category (name) VALUES ('컴퓨터/IT');
INSERT INTO BookStore.category (name) VALUES ('자기계발');
INSERT INTO BookStore.category (name) VALUES ('기술/공학');

INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("불변의 법칙", 1, 1, "종이책", 000212321676, "수천 년 동안의 고전들에 담긴 지혜를 지난 백 년 동안의 사례들로 풀어 쓴 책!", "역사를 보면 세상이 얼마나 아슬아슬한 곳인지 깨닫게 된다. 때로 역사의 흐름을 바꾼 중대한 사건은 전혀 예상치 못한 접촉이나 별생각 없이 무심코 내린 결정 때문에 일어났다. 그것이 경이로운 결과를 낳기도 하고, 비극을 불러오기도 한다. 작가 팀 어번은 말했다. “만일 당신이 시간여행을 해서 태어나기 전의 세상으로 간다면 그 어떤 행동도 섣불리 하지 못할 것이다. 아주 사소한 행동 하나도 미래에 어마어마한 영향을 미칠 수 있음을 알기 때문이다.” -p.27 (이토록 아슬아슬한 세상)

역사를 들여다볼 때 느껴지는 아이러니가 있다. 스토리가 어떻게 끝나는지는 대개 알지만 그 스토리의 시작점은 알 수 없다는 사실이다. 예를 하나 들어보겠다. 무엇이 2008년 금융 위기를 일으켰을까? 그 답을 알려면 먼저 모기지 시장의 구조를 이해해야 한다. 그렇다면 모기지 시장에는 무엇이 영향을 미쳤을까? 그걸 이해하려면 이전 30년간 금리가 하락한 과정을 알아야 한다. 금리 하락을 초래한 요인은 무엇일까? 그걸 이해하려면 먼저 1970년대의 인플레이션을 알아야 한다. 1970년대의 인플레이션은 왜 일어났을까? 그걸 알려면 1970년대의 통화 제도와 베트남전쟁의 영향을 들여다봐야 한다. 베트남전쟁은 왜 일어났을까? 그걸 이해하려면 제2차 세계대전 이후 냉전을 거치며 미국인들이 공산주의에 공포심을 갖게 된 과정을 알아야 한다. 이런 식으로 짚어 올라가면 꼬리에 꼬리를 물고 끝도 없이 계속된다. -p.40 (이토록 아슬아슬한 세상)

NASA는 지구상에서 가장 계획적이고 철저한 조직이라 해도 과언이 아니다. 거기다 그저 두 손 모으고 잘되기를 기도한다고 인간을 달에 보낼 수 있는 것은 아니니 더욱 철두철미하게 준비했을 것이다. NASA는 상상 가능한 모든 리스크에 플랜 A와 플랜 B, 심지어 플랜 C까지 세웠다. 하지만 그럼에도 아무도 생각하지 못한 아주 작은 실수 하나가 재앙을 불러왔다. 재무 설계사 칼 리처즈는 다음과 같이 말했다. “당신이 모든 시나리오를 남김없이 고려했다고 생각한 후에 남는 것이 리스크다.” -p.49 (보이지 않는 것, 리스크)

장담하건대, 앞으로도 여전히 그럴 것이다. 향후 10년간 나타날 가장 큰 리스크와 가장 중요한 뉴스는 지금 아무도 언급하지 않는 무언가일 것이다. 당신이 이 책을 읽고 있는 때가몇 년도이든 마찬가지다. 내가 이것을 자신 있게 말할 수 있는 이유는 지금까지 늘 그래왔기 때문이다. 예측할 수 없다는 속성이 리스크를 위험한 것으로 만든다. -p.53 (보이지 않는 것, 리스크)

누군가가 어떤 일이 일어날 거라고 말했는데 실제로 일어나면, 그 사람의 예측이 옳은 것이다. 누군가가 어떤 일이 일어날 거라고 말했는데 일어나지 않으면, 그 사람의 예측이 틀린 것이다. 사람들은 이런 식으로만 생각한다. 그렇게 생각하는 것이 정신적 에너지가 덜 들어가고 편하기 때문이다. 눈앞에 실제 결과가 나와 있는 상태에서 어쩌면 다른 결과가 나올 수도 있었다는 사실을 사람들에게(또는 자기 자신에게) 납득시키기는 어렵다. 포인트는 이것이다. 사람들은 자신이 미래를 바라보는 정확한 관점을 원한다고 믿지만, 사실 그들이 정말로 원하는 것은 확실성이다. -p.102 (확률과 확실성)

‘100년 만의’라는 수식어가 붙는 사건을 생각해보자. 100년만의 홍수, 허리케인, 지진, 금융 위기, 사기, 전염병, 정치적 붕괴, 경기 침체 등등. 수많은 끔찍한 사건을 100년 만의 사건이라고 부를 수 있다.‘100년 만의 사건’이란 100년에 한 번씩 일어난다는 뜻이 아니다. 어느 해에든 그 사건이 발생할 확률이 약 1퍼센트라는 의미다. 이는 낮은 확률로 느껴진다. 하지만 수백 가지의 개별적인 100년 만의 사건들이 있다면, 특정한 해에 그중 하나가 발생할 확률은 얼마나 될까? 꽤 높다. -p.106 (확률과 확실성)

완벽한 세상에서라면 정보의 중요성이 그 정보 전달자의 스토리텔링 능력에 의존하지 않는다. 그러나 우리가 살고 있는 이 세상 사람들은 쉽게 지루함을 느끼고, 인내심이 부족하며, 감정에 쉽게 지배당하고, 복잡한 정보가 마치 스토리의 한 장면처럼 이해하기 쉬워지기를 원한다. 주변을 찬찬히 살펴보자. 정보가 오고가는 어떤 상황에서든, 즉 제품, 기업, 정치, 지식, 교육, 문화가 있는 곳이면 어디서든 뛰어난 스토리가 승리한다. 스티븐 호킹은 자신의 물리학 저서들을 두고 이렇게 말한 적이 있다. “누군가 내게 그러더군요. 책에 방정식이 하나 늘어날 때마다 판매량이 절반으로 줄 것이라고요.” 독자들이 원하는 것은 지루한 강의가 아니라 기억에 남는 스토리다. -pp. 129-130 (뛰어난 스토리가 승리한다)

역사학자 스티븐 앰브로즈는 1944년 말 당시 미군 사령관 드와이트 아이젠하워와 오마 브래들리가 전시 전략 수립에 필요한 최고의 이성적 판단력을 갖추고 있었지만 딱 한 가지 디테일을 놓쳤다고 말한다. 그것은 히틀러가 얼마만큼 미치광이였느냐 하는 점이었다. 브래들리의 한 측근은 당시 이렇게 말했다. “만일 우리가 합리적 인간들을 상대로 싸웠다면 그들은 이미 한참 전에 투항했을 것이다.” 하지만 그들은 합리적 인간이 아니었다. 그리고 그 사실, 즉 논리와 이성으로 측정하기 힘든 그 사실이 모든 것을 좌우했다. -p.146 (통계가 놓치는 것)

2008년 9월 10일 리먼브라더스의 재무 건전성은 양호해 보였다. 이 은행의 자기자본비율(금융기관의 손실감수 능력을 평가하는 지표다)은 11.7퍼센트였다. 이는 이전 분기보다 높은 수치였다. 골드만삭스나 뱅크오브아메리카보다도 높았다. 그것은 금융 업계가 호황이었던 2007년 리먼브라더스의 자기자본비율보다 높은 수치였다. 그리고 72시간 뒤, 리먼브라더스는 파산했다.그 3일 동안 변화한 유일한 것은 이 은행에 대한 투자자들의 신뢰였다. -p.152 (통계가 놓치는 것)

하나의 결과는 또 다른 결과를 낳았다. 성장 목표 수치를 달성하려는 욕구가 결국 합리적 분석과 판단을 밀어냈다. 스타벅스 매장의 포화 상태는 도를 넘었다. 경제 호황기였음에도 동일 매장 매출 성장률이 50퍼센트 감소했다. 하워드 슐츠는 2007년 경영진에게 보낸 메일에 이렇게 썼다. “1,000개도 안 되던 매장이 1만 3,000개로 늘어나는 동안 우리는 일련의 결정을 내렸고 지금 되돌아보면 그 결정들이 ‘스타벅스 경험’을 희석했습니다.” -p.186 (더 많이, 더 빨리)

투자자 패트릭 오쇼너시는 이렇게 말했다. “나는 놀라운 성취를 거둔 사람을 많이 만났는데 그들은 대개 행복해 보이지 않았다. 오히려 ‘괴로워’ 보인다고 해야 맞을듯했다.” 두려움과 고통, 역경은 긍정적 감정이 결코 따라갈 수 없는 강력한 동기 부여 요소다. 이것은 역사가 주는 큰 교훈이다. 그리고 이 교훈은 결국 우리에게 이런 깨달음을 준다. ‘어떤 삶을 원해야 할지 신중하게 생각하고 판단하라.’ 아무런 걱정도 고통도 스트레스도 없는 삶이 행복할 것 같다. 하지만 그런 삶에는 동기부여도 발전도 없다. 역경을 두 팔 벌려 환영할 사람은 없다. 하지만 우리는 그것이 창의적 문제해결과 혁신의 가장 강력한 연료라는 사실을 인정해야 한다. -p.212-213 (마법이 일어나는 순간)

만일 내가 “50년 후에 평균적인 미국인들이 지금보다 두 배 부유해질 가능성이 얼마일까?”라고 묻는다면 가당찮은 얘기로 들릴 것이다. 그렇게 될 가능성이 대단히 낮아 보인다. 지금보다 ‘두 배’나 부자가 된다고? 재산이 ‘곱절’로 늘어난다고? 너무 야심 찬 목표 같다. 하지만 “우리가 앞으로 50년 동안 평균 연간 성장률 1.4퍼센트를 달성할 가능성이 얼마일까?”라고 묻는다면, 나는 비관론자라는 소리를 들을 것이다. 사람들은 말할 것이다. “1퍼센트? 고작?” 그러나 위 둘은 똑같은 얘기다. 우리는 늘 그래왔고, 앞으로도 늘 그럴 것이다. -p.225 (비극은 순식간이고, 기적은 오래 걸린다)

이렇듯 성가신 문제나 불편함을 얼마만큼 견디는 것이 최선인지 판단하는 능력은 중요하다. 이 사실을 대부분의 사람들은 잘 깨닫지 못한다. 프랭클린 루스벨트 대통령은 세상에서 가장 강한 남자였지만 하반신이 마비된 탓에 화장실에 갈 때도 보좌관의 도움을 받아야 했다. 그는 언젠가 이렇게 말했다. “당신이 다리를 쓸수 없는 상황이라면, 오렌지주스를 먹고 싶지만 사람들이 우유를 가져다줄 때 ‘괜찮습니다’라고 말하고 우유를 마실 줄알아야 한다.” 루스벨트 대통령은 얼마만큼의 비효율성과 불편함을 견뎌야 하는지를 알고 있었던 것이다. -p.280 (모든 여정은 원래 힘들다)", "모건 하우절 저자", 100, "
서문 인생의 작은 법칙들

1. 이토록 아슬아슬한 세상
- 지나온 과거를 돌아보면, 앞으로의 미래는 알 수 없단 사실을 깨닫게 된다.

2. 보이지 않는 것, 리스크
- 사실 우리는 미래를 예측하는 능력이 꽤 뛰어나다. 다만 놀라운 뜻밖의 일을 예측하지 못할 뿐이다. 그리고 그것이 모든 걸 좌우하곤 한다.

3. 기대치와 현실
- 행복을 위한 제1원칙은 기대치를 낮추는 것이다.

4. 인간, 그 알 수 없는 존재
- 독특하지만 훌륭한 특성을 가진 사람은 독특하지만 훌륭하지 않은 특성도 함께 갖고 있다.

5. 확률과 확실성
- 사람들이 원하는 것은 정확한 정보가 아니다. 사람들이 원하는 것은 확실성이다.

6. 뛰어난 스토리가 승리한다
- 스토리는 언제나 통계보다 힘이 세다.

7. 통계가 놓치는 것
- 측정할 수 없는 힘들이 세상을 움직인다.

8. 평화가 혼돈의 씨앗을 뿌린다
- 시장이 미친 듯이 과열되는 것은 고장 났다는 의미가 아니다.
미친 듯한 과열은 정상이다. 더 미친 듯이 과열되는 것도 정상이다.

9. 더 많이, 더 빨리
- 좋은 아이디어라도 무리한 속도를 내면 나쁜 아이디어가 된다.

10. 마법이 일어나는 순간
- 고통은 평화와 달리 집중력을 발휘시킨다.

11. 비극은 순식간이고, 기적은 오래 걸린다
- 좋은 일은 작고 점진적인 변화가 쌓여 일어나므로 시간이 걸리지만,
나쁜 일은 갑작스러운 신뢰 상실이나 눈 깜짝할 새에 발생한 치명적 실수 탓에 일어난다.

12. 사소한 것과 거대한 결과
- 작은 것이 쌓여 엄청난 것을 만든다.

13. 희망 그리고 절망
- 발전을 위해서는 낙관주의와 비관주의가 공존해야 한다.

14. 완벽함의 함정
- 약간의 불완전함이 오히려 유용하다.

15. 모든 여정은 원래 힘들다
- 목표로 삼을 가치가 있는 것에는 고통이 따른다.
중요한 것은 고통을 개의치 않는 마인드다.

16. 계속 달려라
- 경쟁 우위는 결국에는 사라진다.

17. 미래의 경이로움에 대하여
- 발전은 늘 지지부진한 것처럼 보인다.
그래서 우리는 새로운 기술의 잠재력을 과소평가하기 쉽다.

18. 보기보다 힘들고, 보이는 것만큼 즐겁지 않다
- “거짓말이라는 비료를 준 땅의 풀이 언제나 더 푸르다.”

19. 인센티브: 세상에서 가장 강력한 힘
- 인센티브는 때로 정신 나간 행동을 하게 한다.
사람들은 거의 모든 것을 정당화하거나 변호할 수 있다.

20. 겪어봐야 안다
- 직접 경험하는 것만큼 설득력이 센 것은 없다.

21. 멀리 보는 것에 관하여
- “장기 전략으로 갈 거야”라고 말하는 것은 에베레스트산 밑에서 정상을 가리키면서
“저기에 올라갈 거야”라고 말하는 것과 비슷하다. 음, 멋진 생각이다.
그리고 이제 수많은 시험과 고난이 시작된다.

22. 복잡함과 단순함
- 필요 이상으로 복잡해서 좋을 것은 없다.

23. 상처는 아물지만 흉터는 남는다
- 그 사람은 내가 경험하지 못한 무엇을 경험했기에 그런 견해를 갖고 있을까?
만일 그와 같은 경험을 한다면 나도 그렇게 생각하게 될까?

당신이 생각해볼 만한 질문들
감사의 글
주석
번역과 관련하여", 22500, 0 , "2024-02-28");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("신델렐라", 2, 2, "종이책", 1, "유리구두...", "투명한 유리구두", "걍구두", 100, "목차", 20000, 0, "2024-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("백설공주들", 3, 3, "종이책", 2, "사과...", "많이 어리다...", "김어림", 100, "목차", 20000, 0, "2024-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("흥부와 놀부", 4, 4, "종이책", 3, "제비...", "많이 어리다...", "김어림", 100, "목차", 20000, 0, "2024-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("콩쥐 팥쥐", 5, 1, "ebook", 4, "콩팥..", "콩심은데 콩나고..", "김콩팥", 100, "목차입니다.", 20000, 0, "2024-01-07");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("용궁에 간 토끼", 6, 1, "종이책", 5, "깡충..", "용왕님 하이..", "김거북", 100, "목차입니다.", 20000, 0, "2024-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("해님달님", 7, 2, "ebook", 6, "동앗줄..", "황금 동앗줄..!", "김해님", 100, "목차입니다.", 20000, 0, "2024-01-16");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("장화홍련전", 8, 1, "ebook", 7, "기억이 안나요..", "장화와 홍련이?..", "김장화", 100, "목차입니다.", 20000, 0, "2024-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("견우와 직녀", 9, 2, "ebook", 8, "오작교!!", "칠월 칠석!!", "김다리", 100, "목차입니다.", 20000, 0, "2024-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("효녀 심청", 10, 1, "종이책", 9, "심청아..", "공양미 삼백석..", "김심청", 100, "목차입니다.", 20000, 0, "2024-01-12");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("혹부리 영감", 10, 2, "ebook", 10, "노래 주머니..", "혹 두개 되버림..", "김영감", 100, "목차입니다.", 20000, 0, "2024-01-05");

INSERT INTO BookStore.users (email, name, password, salt) VALUES ('abc@gmail.com', '홍길동', 'DXG6vjL/j7wfMA==', 'y9gFwrBaPpH7FQ==');
INSERT INTO BookStore.users (email, name, password, salt) VALUES ('abcd@gmail.com', '이홍철', '7Gzc43UTFzogzA==', 'I+0dnN1aFMFdDA==');

INSERT INTO BookStore.likes (user_id, liked_book_id) VALUES (1, 1);
INSERT INTO BookStore.likes (user_id, liked_book_id) VALUES (2, 2);
INSERT INTO BookStore.likes (user_id, liked_book_id) VALUES (1, 3);

INSERT INTO cartItems (user_id, book_id, count) VALUES (1,1,1);
INSERT INTO cartItems (user_id, book_id, count) VALUES (2,4,10);
INSERT INTO cartItems (user_id, book_id, count) VALUES (2,3,2);
INSERT INTO cartItems (user_id, book_id, count) VALUES (1,2,3);
INSERT INTO cartItems (user_id, book_id, count) VALUES (1,1,2);
INSERT INTO cartItems (user_id, book_id, count) VALUES (1,1,10);

-- Delivery
INSERT INTO delivery VALUES (1, '강원도 춘천시 동내면 대룡산길 227-314 24408 한국', '홍길동' , '010-1234-5667');
INSERT INTO delivery VALUES (2, '경상북도 경주시 감포읍 회곡길 10-8 38123 한국', '안녕길' , '010-2345-5667');
INSERT INTO delivery VALUES (3, '경기도 고양시 덕양구 통일로754번길 12(관산동) 10285 한국', '윤봉길' , '010-3333-5667');

-- Order
INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id, created_at) VALUES ("어린왕자", 3, 6000, 1, 1, '2019-11-11');
INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id, created_at) VALUES ("어린왕자", 3, 6000, 1, 1, '2019-11-11');

-- orderBook
INSERT INTO orderedBook (order_id, book_id, quantity ) VALUES (1, 2, 3);
INSERT INTO orderedBook (order_id, book_id, quantity ) VALUES (2, 1, 3);
INSERT INTO orderedBook (order_id, book_id, quantity ) VALUES (3, 2, 10);

-- set Foreign key = 1
set FOREIGN_KEY_CHECKS = 1;
