import { useContext } from "react"
import { GameContext } from "./context.js"

export const Map = () => (
    <svg width="1408" height="653" viewBox="0 0 1408 653" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Country id="IS" d="M534.5 47L538.5 55L526 64H506L497.5 53L507.5 47L522.5 48.5L534.5 47Z" fill="#D9D9D9" />
        <Country id="CA" d="M82 77.5L130.5 33.5L271 4L371.5 38L368.5 114.5L325.5 131L267 152.5L216 131H93L82 77.5Z" fill="#D9D9D9" />
        <Country id="US-Alaska" d="M69.5 28L127.5 34L79 77L0.5 93L27 47.5L69.5 28Z" fill="#D9D9D9" />
        <Country id="US" d="M93.5 134.5H213L267.5 154L322 134.5L335.5 148L231 220V251L221.5 246L213 225L162 230.5L151.5 246L80.5 212.5L57.5 186.5L93.5 134.5Z" fill="#D9D9D9" />
        <Country id="MX" d="M78.6987 213.5L152 248V278.5H171.5L183.5 266L196.5 272L164.5 301L92 272L78.6987 213.5Z" fill="#D9D9D9" />
        <Country id="GT" d="M180 287.5V297L174.5 306.5L165.5 302L180 287.5Z" fill="#D9D9D9" />
        <Country id="BZ" d="M181 287.5L187.5 282L185 292.5L181 295.5V287.5Z" fill="#D9D9D9" />
        <Country id="HN" d="M182.5 295.357H206L205 301.357L187.5 310.857L179 299.857L182.5 295.357Z" fill="#D9D9D9" />
        <Country id="SV" d="M178.5 302.5L185.5 309.5L175 308L178.5 302.5Z" fill="#D9D9D9" />
        <Country id="NI" d="M205.5 301.5L202.5 320.5H192.5L187 312L205.5 301.5Z" fill="#D9D9D9" />
        <Country id="CR" d="M193 321H202L206.5 328V334.5L193 325.5V321Z" fill="#D9D9D9" />
        <Country id="PA" d="M207.5 328L222.5 327L232.5 331.5L227 339.5L222 332L215 339.5L207.5 335V328Z" fill="#D9D9D9" />
        <Country id="CO" d="M242.5 318L257 313.5L252.5 339.5L272.5 344.5L273.5 368L262 367.5V397L220.5 369L229.5 358L227.5 339.5L242.5 318Z" fill="#D9D9D9" />
        <Country id="VE" d="M273.5 343.5L253.5 339L257.5 313.5L305.5 329L302.5 351L274.5 368L273.5 343.5Z" fill="#D9D9D9" />
        <Country id="GY" d="M306.5 329L317 345.5L318 369L302.5 370.5L306.5 329Z" fill="#D9D9D9" />
        <Country id="SR" d="M318 345L331 346V365.5L318.5 367L318 345Z" fill="#D9D9D9" />
        <Country id="FR-Guyana" d="M332 346.5L343 353.5L338.5 364.5L331.5 365L332 346.5Z" fill="#D9D9D9" />
        <Country id="EC" d="M219.5 369.5L237 381.5L211 402L219.5 369.5Z" fill="#D9D9D9" />
        <Country id="PE" d="M238 382L261.5 398L245 415.5L267.5 434L265.5 468L238 452L211.5 403L238 382Z" fill="#D9D9D9" />
        <Country id="BO" d="M270 434L319.5 471.5L299 486.5L279.5 488.5L267 469.5L270 434Z" fill="#D9D9D9" />
        <Country id="PY" d="M319.5 472.5L342 507.5L333 517.5L299.5 487.5L319.5 472.5Z" fill="#D9D9D9" />
        <Country id="UY" d="M328.5 527L352.5 541.5L344.5 553.5L328.5 545V527Z" fill="#D9D9D9" />
        <Country id="BR" d="M344.5 355L419.5 405L400 483.5L352.5 540L329 525L343 507.5L320.5 471L246.5 415L262.5 398V369H275L302 353L300.5 372L338.5 367L344.5 355Z" fill="#D9D9D9" />
        <Country id="CL" d="M265.5 472L279.5 491L294.5 632L272.5 580L265.5 472Z" fill="#D9D9D9" />
        <Country id="AR" d="M281 489H299L332.5 518L326.5 527.5V546.5L337.5 551.5V571H322L311.5 624.5L334 652.5L296.5 638L281 489Z" fill="#D9D9D9" />
        <Country id="GB" d="M555.5 82.5L572 87V99.5L584.5 113.5L577 122.5L555.5 125.5L564 108.5L555.5 82.5Z" fill="#D9D9D9" />
        <Country id="IE" d="M556 99.5V114L538.5 120L543 101.5L556 99.5Z" fill="#D9D9D9" />
        <Country id="PT" d="M550 164.5L545 191L536 189L539 162.5L550 164.5Z" fill="#D9D9D9" />
        <Country id="ES" d="M545.699 190.5L551.5 163.5L538.5 159.5L542.5 155.5L573 159.5L577.5 166.5L582.5 163.5H589L566 190.5H545.699Z" fill="#D9D9D9" />
        <Country id="FR" d="M586 120L607 131L600.5 145L604.5 156H590.5L587.5 162H583.5L579.5 157.5L575 159L570 157.5L572 145L558.5 133.5L586 120Z" fill="#D9D9D9" />
        <Country id="AD" d="M579 158.5L583 162.5L577.5 165.5L574.5 160L579 158.5Z" fill="#D9D9D9" />
        <Country id="MC" d="M597 157H603.5L601.5 159.5L597 157Z" fill="#D9D9D9" />
        <Country id="IT" d="M623 140.5L629.5 143.5L624.5 150.5L625.5 151.5V154H628L650 174L643.5 183L634.5 193.5L624.5 184.5L638 183.5L637 178L628.5 168.5V165.5H625.5L614.5 154H606.5L602.5 146.5L623 140.5Z" fill="#D9D9D9" />
        <Country id="VA" d="M625 166H628V169L625 166Z" fill="#D9D9D9" />
        <Country id="SM" d="M626 151L628.5 153.5H626V151Z" fill="#D9D9D9" />
        <Country id="BE" d="M601 123L598.5 126L587.5 119.5L594 116.5L601 123Z" fill="#D9D9D9" />
        <Country id="NL" d="M605 108.5L602.5 122.5L594.5 116L605 108.5Z" fill="#D9D9D9" />
        <Country id="LU" d="M602.5 123L602 127L599.5 126L602.5 123Z" fill="#D9D9D9" />
        <Country id="CH" d="M613.5 137L615.5 142L602.5 144L605 137.5L613.5 137Z" fill="#D9D9D9" />
        <Country id="DE" d="M608.5 130.5L602.5 127.5L606 108L614 103L629 104L634.5 120L623.5 124.5L630 131L627 136.5H605.5L608.5 130.5Z" fill="#D9D9D9" />
        <Country id="DK" d="M617.5 88.5L616 102L611 103L610 93L617.5 88.5Z" fill="#D9D9D9" />
        <Country id="SE" d="M661.5 51L640.5 68L644 83L627.5 99L621 83L624 61.5L642.5 41L658.5 39.5L661.5 51Z" fill="#D9D9D9" />
        <Country id="NO" d="M600 68L640.5 34.5L675 32L665 37L642.5 39.5L622 61.5L619.5 81L600 85.5V68Z" fill="#D9D9D9" />
        <Country id="FI" d="M682 75L662.5 77.5L654 65L664 55L660.5 39L667.5 37.5L676 32.5L690 65L682 75Z" fill="#D9D9D9" />
        <Country id="EE" d="M679.5 80.5V90L665 83L679.5 80.5Z" fill="#D9D9D9" />
        <Country id="LV" d="M677.5 90.5L682 96.5L656.5 94L665.5 84.5L677.5 90.5Z" fill="#D9D9D9" />
        <Country id="LT" d="M678.5 97L669 107L657.5 101L656 95L678.5 97Z" fill="#D9D9D9" />
        <Country id="PL" d="M658 103L668 107.5L666 130L636 120.5L631 106L658 103Z" fill="#D9D9D9" />
        <Country id="BY" d="M679.5 97.5H692.5L699.5 109L693 118.5L668.5 115.5V108L679.5 97.5Z" fill="#D9D9D9" />
        <Country id="UA" d="M693 119.5L699 114.5L727 125L729 141.5L695.5 144L690.5 134.5H666L668 117L693 119.5Z" fill="#D9D9D9" />
        <Country id="MD" d="M689 135.5L695.5 145.5L692 149L682 136L689 135.5Z" fill="#D9D9D9" />
        <Country id="RO" d="M680.5 136L692.5 151L689 155H667L657 144.5L665.5 136H680.5Z" fill="#D9D9D9" />
        <Country id="CZ" d="M651.5 127L632 132L625.5 125L635 121L651.5 127Z" fill="#D9D9D9" />
        <Country id="SK" d="M654.5 127.5L664.5 131L647 136.5L641 131L654.5 127.5Z" fill="#D9D9D9" />
        <Country id="LI" d="M616.5 137L616 141.5L614 137H616.5Z" fill="#D9D9D9" />
        <Country id="AT" d="M627 137L630.5 132.5L641 131.5L644.5 135.5L641 140.5L630 143L623 140L616.5 141.5L617 137H627Z" fill="#D9D9D9" />
        <Country id="HU" d="M645 136.5L647.5 137L663.5 132L665.5 135L656.5 144L648.5 146.5L641 141.5L645 136.5Z" fill="#D9D9D9" />
        <Country id="SI" d="M639 142L632.5 150L629.5 145L639 142Z" fill="#D9D9D9" />
        <Country id="HR" d="M638.5 149.5L642.5 158L633 150.5L640 142L650.5 149L638.5 149.5Z" fill="#D9D9D9" />
        <Country id="BA" d="M650.5 149.5L653.5 157L645 161L639.5 150L650.5 149.5Z" fill="#D9D9D9" />
        <Country id="ME" d="M653 158L656 161.5L652 164L648.5 160.5L653 158Z" fill="#D9D9D9" />
        <Country id="RS" d="M656 145L666 155L666.5 163L660 163.5L660.5 159L655 158.5L650.5 147L656 145Z" fill="#D9D9D9" />
        <Country id="XK" d="M660 159.5L659.5 164L655 159L660 159.5Z" fill="#D9D9D9" />
        <Country id="AL" d="M656 162.5L660 172L657 177L653 164.5L656 162.5Z" fill="#D9D9D9" />
        <Country id="MK" d="M666.5 163.5L668.5 168.5L660.5 171L658 164.5L666.5 163.5Z" fill="#D9D9D9" />
        <Country id="BG" d="M689 156L682 167L669.5 167.5L667 156.5L689 156Z" fill="#D9D9D9" />
        <Country id="GR" d="M682.5 167.5L669.5 177L675 186L663.5 192L658 177L661 171.5L682.5 167.5Z" fill="#D9D9D9" />
        <Country id="TR" d="M686 165L751 168L759.5 188.5L693.5 193.5L681 172L686 165Z" fill="#D9D9D9" />
        <Country id="CY" d="M717.5 196L714.5 202.5L709.5 200.5L717.5 196Z" fill="#D9D9D9" />
        <Country id="MT" d="M631.5 193.9L634.5 196.9L629 195.9L631.5 193.9Z" fill="#D9D9D9" />
        <Country id="GE" d="M737 158L759 162.5L765.5 168L745.5 167L737 158Z" fill="#D9D9D9" />
        <Country id="AM" d="M759.5 168.5L764 179.5L756 177.5L752 168.5H759.5Z" fill="#D9D9D9" />
        <Country id="AZ" d="M774 167.5L778.5 172.5L776 182L766 179.5L760.5 169L774 167.5Z" fill="#D9D9D9" />
        <Country id="SY" d="M747.5 191.5L745.5 204L727 212.5L723.5 192.5L747.5 191.5Z" fill="#D9D9D9" />
        <Country id="IQ" d="M747.5 204L748.5 191L759.5 190L778 223L773.5 230L740 214.5L738 209.5L747.5 204Z" fill="#D9D9D9" />
        <Country id="IR" d="M775.5 183L786 192.5H795.5L809.5 183L828.5 192.5L838.5 248.5L809.5 243.5L780 225.5L756 178.5L775.5 183Z" fill="#D9D9D9" />
        <Country id="KW" d="M778.5 224L780.5 233L774 230.5L778.5 224Z" fill="#D9D9D9" />
        <Country id="LB" d="M724.5 203L726 212.5L723 208.5L724.5 203Z" fill="#D9D9D9" />
        <Country id="IL" d="M725.5 213L721.5 231L719 219L725.5 213Z" fill="#D9D9D9" />
        <Country id="PS" d="M725 212.5L719.5 217.5L722.5 209L725 212.5Z" fill="#D9D9D9" />
        <Country id="JO" d="M726 214L737 209L739.5 215.5L723 230L726 214Z" fill="#D9D9D9" />
        <Country id="SA" d="M741 215.5L781 234.5L812 273L759.5 292L721.5 233L741 215.5Z" fill="#D9D9D9" />
        <Country id="AE" d="M814.5 247.5L812.5 272L799 255.5L814.5 247.5Z" fill="#D9D9D9" />
        <Country id="OM" d="M831.5 274.5L803.5 293L799.5 280L814 273.5L816 248.5L831.5 274.5Z" fill="#D9D9D9" />
        <Country id="YE" d="M797.5 280L802.5 294.5L769 310.5L760 293L797.5 280Z" fill="#D9D9D9" />
        <Country id="QA" d="M794.5 241L795.5 251.5L792 247.5L794.5 241Z" fill="#D9D9D9" />
        <Country id="BH" d="M793.5 241L792 244.5L789.5 242L793.5 241Z" fill="#D9D9D9" />
        <Country id="AF" d="M884.5 186.5L836.5 225.5L831 194L884.5 186.5Z" fill="#D9D9D9" />
        <Country id="TM" d="M853.5 189L831.5 192.5L794.5 175.5L801.5 158L853.5 189Z" fill="#D9D9D9" />
        <Country id="UZ" d="M810.5 146L854.5 166V186.5L802 156L810.5 146Z" fill="#D9D9D9" />
        <Country id="TJ" d="M877.5 178L883.5 185.5L856 188V176L877.5 178Z" fill="#D9D9D9" />
        <Country id="KG" d="M900 163.5L878.5 175.5L856.5 174.5L859.5 163.5H900Z" fill="#D9D9D9" />
        <Country id="KZ" d="M914 130L898.5 159L855 162L809.5 142.5L793 166L759.5 123.5L841 99.5L914 130Z" fill="#D9D9D9" />
        <Country id="RU" d="M770.5 163.5L736 156.5L728 125L702.5 113L693.5 95H683.5L681.5 76L693.5 65.5L681.5 35L803.5 32L876.5 0.5L993.5 22.5L1166 35L1194 65.5L1089.5 80.5L1114.5 156.5L1036 103L1031 125H915L844 95L756.5 121.5L770.5 163.5Z" fill="#D9D9D9" />
        <Country id="JP" d="M1165 195L1129 214L1118 211L1145 187V141.5L1165 195Z" fill="#D9D9D9" />
        <Country id="KR" d="M1105.5 182.5L1116 198.5L1104 202.5L1096 187.5L1105.5 182.5Z" fill="#D9D9D9" />
        <Country id="KP" d="M1102.5 162.5L1104 181.5L1095 187L1084 174.5L1102.5 162.5Z" fill="#D9D9D9" />
        <Country id="MN" d="M1028.5 128L1041.5 140.5L1019.5 164L958.5 159L917.5 128H1028.5Z" fill="#D9D9D9" />
        <Country id="CN" d="M902.5 164L915.5 130L956.5 160.5L1022 166L1044 139.5L1032.5 126.5L1038.5 105.5L1109 156.5L1075.5 178L1096 223.5L1086.5 257.5L1047 270.5L1032.5 262.5L1010 267L984.5 227L953.5 235L915.5 221L881 178L902.5 164Z" fill="#D9D9D9" />
        <Country id="TW" d="M1098 245.5L1101.5 264.5L1091.5 261.5L1098 245.5Z" fill="#D9D9D9" />
        <Country id="PH" d="M1131 331L1122.5 345.5L1103 307L1108.5 276.5L1131 331Z" fill="#D9D9D9" />
        <Country id="PK" d="M837 228L887 189.5L869.5 257L840 248L837 228Z" fill="#D9D9D9" />
        <Country id="IN" d="M951.5 237.5L968.5 241.5L983.5 228.5L989 237.5L972 269.5L973 250L955 247.5L958.5 264L914 334.5L871 258L888.5 192.5L915.5 223.5L914 232L951.5 237.5Z" fill="#D9D9D9" />
        <Country id="NP" d="M952 236L915.5 230.5L917 224L952 236Z" fill="#D9D9D9" />
        <Country id="BT" d="M981 228.5L968 240L954 236.5L981 228.5Z" fill="#D9D9D9" />
        <Country id="BD" d="M971.5 250.5V267L960 264.5L956 248.5L971.5 250.5Z" fill="#D9D9D9" />
        <Country id="LK" d="M926.5 327L935.5 343L925.5 350.5L926.5 327Z" fill="#D9D9D9" />
        <Country id="MM" d="M990 239L1009 268L989 295.5L974 269L990 239Z" fill="#D9D9D9" />
        <Country id="TH" d="M1007 273.5L1035.5 295.5L1022.5 312.5H1012.5V327L1025 345L1007 336L997.5 286.5L1007 273.5Z" fill="#D9D9D9" />
        <Country id="LA" d="M1018 266.5L1044 300.5L1009 273L1018 266.5Z" fill="#D9D9D9" />
        <Country id="KH" d="M1036.5 296.5L1044 302L1045.5 313.5L1033.5 323.5L1023 314.5L1036.5 296.5Z" fill="#D9D9D9" />
        <Country id="VN" d="M1039 267.5L1058 317.5L1034 325.5L1046.5 313.5L1045.5 301.5L1021 266.5L1031.5 264L1039 267.5Z" fill="#D9D9D9" />
        <Country id="MY-West" d="M1025.5 346L1034 367L1027 364L1014 340.5L1025.5 346Z" fill="#D9D9D9" />
        <Country id="MY-East" d="M1055.5 370.5V367L1076.5 352L1083 354L1084 347L1092 341L1098.5 352L1055.5 370.5Z" fill="#D9D9D9" />
        <Country id="SG" d="M1034 367.5L1033.5 371L1027.5 365L1034 367.5Z" fill="#D9D9D9" />
        <Country id="ID-Sumatra" d="M996.5 348L1040 383V406.5L1023.5 396.5L996.5 348Z" fill="#D9D9D9" />
        <Country id="ID-Java" d="M1042.5 407L1111.5 418.5L1107 424L1045.5 412.5L1042.5 407Z" fill="#D9D9D9" />
        <Country id="ID-Borneo" d="M1098.5 353L1093 397L1063.5 393L1055 372L1098.5 353Z" fill="#D9D9D9" />
        <Country id="ID-New Guinea" d="M1197.5 388.5L1194.5 420L1171 406L1161 379.5L1197.5 388.5Z" fill="#D9D9D9" />
        <Country id="TL" d="M1135 420.5L1126.5 417.5L1121 424.5L1135 420.5Z" fill="#D9D9D9" />
        <Country id="BN" d="M1083.5 346.5L1082.5 353.5L1076.5 351.5L1083.5 346.5Z" fill="#D9D9D9" />
        <Country id="PG" d="M1198.5 389L1223 401L1234.5 428L1195.5 420.5L1198.5 389Z" fill="#D9D9D9" />
        <Country id="AU" d="M1171.5 457.5L1203.5 433L1247.5 495.5L1190.5 575.5L1118 540.5L1052 556L1056.5 478L1151.5 430.5L1171.5 457.5Z" fill="#D9D9D9" />
        <Country id="NZ" d="M1309 549.5L1315 572L1258 604L1227 607L1309 549.5Z" fill="#D9D9D9" />
        <Country id="FJ" d="M1354 455.5L1363 461.5L1348 472L1354 455.5Z" fill="#D9D9D9" />
        <Country id="TO" d="M1373 475L1377 483.5L1367 480.5L1373 475Z" fill="#D9D9D9" />
        <Country id="TV" d="M1364 424L1361 431.5L1353 424H1364Z" fill="#D9D9D9" />
        <Country id="WS" d="M1382.5 441.5L1379.5 452L1374 444.5L1382.5 441.5Z" fill="#D9D9D9" />
        <Country id="KI" d="M1407.5 404L1404 415L1387.5 408L1407.5 404Z" fill="#D9D9D9" />
        <Country id="FM" d="M1247 335.5L1239 350L1226.5 344.5L1247 335.5Z" fill="#D9D9D9" />
        <Country id="PW" d="M1179 333.5L1175.5 344L1164 336L1179 333.5Z" fill="#D9D9D9" />
        <Country id="NR" d="M1294 374L1305 388.5L1289 392.5L1294 374Z" fill="#D9D9D9" />
        <Country id="VU" d="M1299 438.5L1302.5 460L1288.5 443L1299 438.5Z" fill="#D9D9D9" />
        <Country id="SB" d="M1262.5 400.5L1287 425L1284.5 434L1262.5 415V400.5Z" fill="#D9D9D9" />
        <Country id="MH" d="M1336.5 340L1319.5 353.5L1317.5 341L1305.5 334.5L1323 325.5L1336.5 340Z" fill="#D9D9D9" />
        <Country id="MV" d="M889 360L896 373.5L878.5 367L889 360Z" fill="#D9D9D9" />
        <Country id="SC" d="M818.5 389.5L810 412.5V392.5L818.5 389.5Z" fill="#D9D9D9" />
        <Country id="MG" d="M797.5 438L779 506.5L755.5 502L769 453.5L797.5 438Z" fill="#D9D9D9" />
        <Country id="MU" d="M826.5 474L824 484L817 478L826.5 474Z" fill="#D9D9D9" />
        <Country id="KM" d="M765.5 428.5L767 439L758.5 433.5L765.5 428.5Z" fill="#D9D9D9" />
        <Country id="SZ" d="M708 504L714.5 507L713.5 515.5L704.5 511.5L708 504Z" fill="#D9D9D9" />
        <Country id="LS" d="M695.5 517.5L704.5 528.5L697 538L687.5 525L695.5 517.5Z" fill="#D9D9D9" />
        <Country id="ZA" d="M696.5 538.5L656 551L643.5 519L698.5 487L709 488L713.5 505.5L708 503L703.5 511.5L713 516.5L705.5 527.5L696.5 516L686 524.5L696.5 538.5Z" fill="#D9D9D9" />
        <Country id="NA" d="M661.5 507L643 518L623 462L664 466L661.5 507Z" fill="#D9D9D9" />
        <Country id="AO" d="M677 431.5L665 464.5L623.5 461L625.5 404L667 413L677 431.5Z" fill="#D9D9D9" />
        <Country id="BW" d="M665.5 466H682.5L698.5 486L663 505.5L665.5 466Z" fill="#D9D9D9" />
        <Country id="ZW" d="M703 453.5L717.5 460.5L710 487.5L699.5 485.5L684 466L703 453.5Z" fill="#D9D9D9" />
        <Country id="ZM" d="M683 465H666.5L678 432L701 439.5L699 417.5L718.5 425L715 445L683 465Z" fill="#D9D9D9" />
        <Country id="MZ" d="M710 488L718.5 459.5L705 453.5L715 445.5L725.5 460.5L731 453.5L725.5 434L750.5 430V453.5L714.5 505L710 488Z" fill="#D9D9D9" />
        <Country id="MW" d="M722.5 427.5L723.5 445L730 453.5L725.5 458.5L716 445L719.5 425.5L722.5 427.5Z" fill="#D9D9D9" />
        <Country id="TZ" d="M745 398L750 429L726.5 432.5V423L711 418L702.5 398L709 391.5L708 380.5L715.5 388.5L724 381.5L745 398Z" fill="#D9D9D9" />
        <Country id="KE" d="M756 383.5L746 397.5L724 380.5L727 352L756 355.5V383.5Z" fill="#D9D9D9" />
        <Country id="BI" d="M708 391L703 397L700 390L708 388V391Z" fill="#D9D9D9" />
        <Country id="RW" d="M707.5 380.5V387.5L700 389L702.5 380.5H707.5Z" fill="#D9D9D9" />
        <Country id="UG" d="M726.5 352L724 373.5L712.5 375.5L708.5 380H702.5L708 357L726.5 352Z" fill="#D9D9D9" />
        <Country id="CD" d="M698 416.5L699.5 437L678.5 430.5L667.5 411.5L625.5 403L641.5 395.5L655 356.5H707L697.5 393.5L704.5 418.5L698 416.5Z" fill="#D9D9D9" />
        <Country id="CG" d="M654 356.5L641.5 394.5L625.5 402L621.5 394L633 384.5L631.5 365L654 356.5Z" fill="#D9D9D9" />
        <Country id="GA" d="M632.5 384L621 393.5L613 386L613.5 371H621.5V365H631L632.5 384Z" fill="#D9D9D9" />
        <Country id="GQ" d="M621 365V370.5H613.5L615.5 365H621Z" fill="#D9D9D9" />
        <Country id="CM" d="M631 364H615L610 352L637.5 314.5L639.5 337.5L635.5 346L642 360.5L631 364Z" fill="#D9D9D9" />
        <Country id="CF" d="M636 345.5L640.5 337.5L672 320L694 352L706.5 356H654.5L642.5 360L636 345.5Z" fill="#D9D9D9" />
        <Country id="SS" d="M718.5 314.5L730 351L707.5 356L694.5 351L678 327.5L718.5 314.5Z" fill="#D9D9D9" />
        <Country id="ET" d="M722 323.5L733.5 302.5H747L758 312.5L755 318.5L782.5 336L771.5 350.5L757 354.5L731 351.5L722 323.5Z" fill="#D9D9D9" />
        <Country id="SO" d="M783.5 356L756.5 383V356L771.5 351.5L783.5 335.5L761 321L799 317.5L783.5 356Z" fill="#D9D9D9" />
        <Country id="DJ" d="M760.5 310.5L764 320L759.5 320.5L756 318L760.5 310.5Z" fill="#D9D9D9" />
        <Country id="ER" d="M734.5 291L741.5 286L760 310L758.5 312L747 301.5H733.5L734.5 291Z" fill="#D9D9D9" />
        <Country id="SD" d="M732.5 302L722 322.5L719 313L677.5 326.5L672.5 319.5L682 265.5L729 260L741 285.5L733.5 289L732.5 302Z" fill="#D9D9D9" />
        <Country id="EG" d="M716.5 235L728 258.5L681.5 264L679 216.5L717.5 219.5L721 234L716.5 235Z" fill="#D9D9D9" />
        <Country id="TD" d="M678 277L671.5 319.5L640 336L638 260L678 277Z" fill="#D9D9D9" />
        <Country id="LY" d="M677.5 215.5L679 275L617.5 250.5L610.5 223L623.5 210.5L677.5 215.5Z" fill="#D9D9D9" />
        <Country id="TN" d="M606 206L610 189.5H618.5L623 210L610 222L606 206Z" fill="#D9D9D9" />
        <Country id="DZ" d="M604 205L616.5 251.5L589.5 280.5L534.5 237L567.5 210.5L564.5 198L607 190.5L604 205Z" fill="#D9D9D9" />
        <Country id="NE" d="M618 251.5L636.5 260L638 310.5L593.5 305L586 315.5L573.5 301.5L618 251.5Z" fill="#D9D9D9" />
        <Country id="NG" d="M637 312L609 351L583.5 343.5L587 316L594 306L637 312Z" fill="#D9D9D9" />
        <Country id="BJ" d="M586 316L582.5 343.5H579L577 320L586 316Z" fill="#D9D9D9" />
        <Country id="TG" d="M576.5 320L578.5 344L575 345.5L571.5 320H576.5Z" fill="#D9D9D9" />
        <Country id="GH" d="M571 320L574.5 346L558.5 350L559.5 320H571Z" fill="#D9D9D9" />
        <Country id="BF" d="M572.5 301.5L585.5 315.5L576.5 319.5H559V323H548L547.5 320.5L564 302.5L572.5 301.5Z" fill="#D9D9D9" />
        <Country id="CI" d="M559 323.5L558 350L538.5 353L536 323.5H559Z" fill="#D9D9D9" />
        <Country id="LR" d="M536.5 336L537.5 353L520 341L528 331L536.5 336Z" fill="#D9D9D9" />
        <Country id="SL" d="M527.5 330.5L519.5 340.5L512 332L519 326L527.5 330.5Z" fill="#D9D9D9" />
        <Country id="GN" d="M536.5 335L519 325L511.5 331L504.5 319L511.5 317.5V313L532.5 314L536.5 335Z" fill="#D9D9D9" />
        <Country id="GW" d="M511 313V317L504.5 318.5L498.5 313H511Z" fill="#D9D9D9" />
        <Country id="SN" d="M519 298L521.5 312.5H498V308H511.5L498 303.5L500 292H510.5L519 298Z" fill="#D9D9D9" />
        <Country id="GM" d="M497 303.5L508.5 307.5H497V303.5Z" fill="#D9D9D9" />
        <Country id="ML" d="M551.5 251.5L588.5 282L573 300.5H565L545 322.5H536L533.5 313H522.5L520.5 297.5H544V251.5H551.5Z" fill="#D9D9D9" />
        <Country id="MR" d="M542.5 249V296H519L511.5 291H500V268.5H521.5V247L534 237.5L549 249H542.5Z" fill="#D9D9D9" />
        <Country id="MA" d="M567 210.5L564 198L549.5 196.5L533 214L531.5 225L509 247L500 268H521V247L567 210.5Z" fill="#D9D9D9" />
        <Country id="CV" d="M467 290.5L474.5 299.5L454.5 294.5L467 290.5Z" fill="#D9D9D9" />
        <Country id="ST" d="M595 373L598.5 382.5L586 376.5L595 373Z" fill="#D9D9D9" />
        <Country id="CU" d="M227.5 259.5L249 274.5H234L225.5 266H205.5L212.5 259.5H227.5Z" fill="#D9D9D9" />
        <Country id="JM" d="M237 283L239.5 287.5H231.5L230.5 281L237 283Z" fill="#D9D9D9" />
        <Country id="HT" d="M259 275.5V287L247 283.5L259 275.5Z" fill="#D9D9D9" />
        <Country id="DO" d="M272 285L259.5 287V275.5L266.5 278.5L272 285Z" fill="#D9D9D9" />
        <Country id="DM" d="M301.5 291.25L303.5 296L300.5 295.75L301.5 291.25Z" fill="#D9D9D9" />
        <Country id="TT" d="M303 318.5L305 324L298 325L303 318.5Z" fill="#D9D9D9" />
        <Country id="VC" d="M305 308.5V312L301.268 311.75L305 308.5Z" fill="#D9D9D9" />
        <Country id="LC" d="M302 300L306 304L307 301.5L302 300Z" fill="#D9D9D9" />
        <Country id="KN" d="M288.5 283.5L292.5 289.5L285.5 287L288.5 283.5Z" fill="#D9D9D9" />
        <Country id="GD" d="M298 311.5L299.5 316L295 311.5H298Z" fill="#D9D9D9" />
        <Country id="BB" d="M313 306L316.5 312L311.5 309.5L313 306Z" fill="#D9D9D9" />
        <Country id="BS" d="M240.5 250.5V257.5L235 254L240.5 250.5Z" fill="#D9D9D9" />
        <Country id="AG" d="M307.5 280.5L308.5 286L301.5 280.5H307.5Z" fill="#D9D9D9" />
    </svg>
)

const Country = ({ id, d }) => {
    const code = id.split("-")[0]
    const { completedCountries } = useContext(GameContext)
    const completed = completedCountries.includes(code)

    return (
        <path d={d} fill={completed ? "#374151" : "#fbbf24"} />
    )
}