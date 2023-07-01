import React from "react";

export type LogoProperties = {
  height: number;
}

export default function Logo({height}: LogoProperties) {
  return (
    <>
      <svg id="logo" width="auto" height={height} viewBox="0 0 1500 1000" xmlns="http://www.w3.org/2000/svg">
        <path xmlns="http://www.w3.org/2000/svg" fill="#000000" opacity="1.000000" stroke="none" d=" M524.414612,18.633043   C537.784912,20.003510 550.496216,22.710676 563.199829,25.492678   C587.342896,30.779848 610.790405,38.413128 633.304932,48.427067   C657.112793,59.016247 680.149841,71.230675 701.267029,86.739204   C716.138489,97.660812 730.309631,109.324837 743.807068,121.983559   C772.265259,148.673370 795.597717,179.268021 814.890625,212.945221   C834.764221,247.635925 849.705139,284.437195 859.275696,323.338409   C859.464111,324.104218 860.115967,324.756256 859.650696,326.033478   C858.171692,326.033478 856.537903,326.033478 854.904114,326.033478   C817.905273,326.033478 780.906189,325.978394 743.907959,326.124329   C740.461670,326.137909 738.595642,325.222290 737.436096,321.975586   C731.615967,305.679138 724.571472,289.919617 715.967590,274.896362   C708.076965,261.118683 699.171021,248.055130 689.296021,235.569504   C681.855957,226.162628 673.429443,217.794189 664.905457,209.498627   C648.658508,193.687042 630.320068,180.704239 610.322449,170.000061   C586.266968,157.123825 560.781494,148.120621 534.209473,142.379578   C524.377502,140.255325 514.288391,139.038391 504.238342,137.782196   C488.203339,135.777893 472.181824,135.848007 456.143646,136.094574   C442.759369,136.300339 429.562531,138.556183 416.344269,140.760513   C395.974274,144.157471 376.433594,150.191544 357.496216,158.114502   C333.831879,168.015121 311.819366,180.838211 291.602600,196.774460   C278.033020,207.470901 265.536255,219.289185 253.790497,231.857162   C238.021988,248.729477 224.720886,267.552704 213.220078,287.542572   C201.534836,307.852966 192.235657,329.290588 185.709274,351.834625   C180.793640,368.814758 176.843109,385.974121 174.818787,403.630737   C173.332184,416.597198 171.985413,429.616943 172.238998,442.556610   C172.674530,464.781036 174.870132,486.840454 179.663712,508.758667   C185.702728,536.371643 195.207596,562.528748 208.222336,587.423706   C217.926544,605.986145 229.512451,623.409607 242.976074,639.553772   C253.699631,652.412354 264.716949,664.967773 277.437439,675.906128   C291.069122,687.627930 305.565002,698.174438 320.958893,707.481750   C340.679047,719.404663 361.651367,728.484802 383.662567,735.217896   C400.553986,740.384888 417.646545,744.220337 435.298584,746.232788   C453.946350,748.358765 472.623291,748.934082 491.166412,747.717041   C515.598083,746.113525 539.524048,740.917114 562.864685,733.066040   C595.269958,722.165955 624.723816,705.857849 651.448242,684.819580   C675.361084,665.994568 695.215027,643.298340 712.107056,617.895935   C726.051880,596.925537 736.892456,574.563049 745.013123,550.805908   C745.912231,548.175537 747.047485,546.873657 750.344238,546.889160   C787.508911,547.064148 824.674683,547.012512 861.840210,546.976501   C864.819641,546.973633 866.361572,546.563538 865.219971,551.066467   C858.432922,577.835693 849.034302,603.621887 837.703918,628.764221   C826.917114,652.700317 814.079224,675.465210 798.974487,696.923950   C787.667786,712.987061 775.681396,728.475342 762.039001,742.728821   C753.877625,751.255676 745.592590,759.597168 736.928345,767.594177   C719.240417,783.919922 700.046326,798.272949 679.522278,810.780518   C651.384521,827.928223 621.739136,841.897034 590.115051,851.398743   C572.163025,856.792664 553.951721,861.007202 535.435059,864.173462   C520.190247,866.780212 504.815399,867.421448 489.543701,869.224121   C472.391510,871.248779 455.405243,869.288757 438.412720,868.726257   C415.326721,867.961975 392.593536,863.479675 370.137817,857.975769   C363.570953,856.366272 357.018646,854.640076 350.584991,852.576599   C348.451416,851.892273 346.843414,852.052490 345.029694,852.983826   C306.331757,872.854248 267.639954,892.736816 228.918869,912.562195   C219.916046,917.171692 210.810364,921.580383 201.344070,926.284180   C200.153381,920.160645 201.770050,914.444153 202.372375,908.931335   C202.917007,903.946411 203.144394,898.848877 203.767136,893.848755   C205.734268,878.054199 206.392868,862.101501 208.095230,846.267700   C209.531219,832.911377 210.913361,819.557617 212.054413,806.172485   C212.732239,798.221130 213.884430,790.307556 214.953339,782.394531   C215.185608,780.675110 214.098206,780.416138 213.138428,779.525757   C201.631989,768.850830 189.065704,759.357178 178.299850,747.849670   C155.694794,723.687317 134.925385,698.228333 117.797028,669.727173   C100.327728,640.658569 86.305420,610.159058 75.585007,578.076843   C69.592781,560.144348 64.620911,541.872131 61.238647,523.301147   C58.756271,509.671204 57.289375,495.821594 55.801189,481.995941   C53.662003,462.122284 53.594444,442.239014 54.223694,422.384705   C54.621975,409.818085 56.268623,397.236450 57.801434,384.683960   C60.582020,361.913147 65.693062,339.743713 71.940567,317.737915   C79.807549,290.027832 90.994652,263.653503 104.102196,238.123291   C115.084831,216.731873 128.065231,196.542618 142.844238,177.473068   C154.364273,162.608627 166.488190,148.312668 179.657074,134.937073   C197.707367,116.603416 217.542496,100.328560 238.755264,85.778954   C272.775146,62.445126 309.489105,44.547592 348.975220,32.615475   C367.395721,27.049061 386.124146,22.582743 405.258759,19.893818   C416.613312,18.298193 428.004944,17.217278 439.383514,15.920800   C455.491760,14.085415 471.625885,14.961040 487.721222,15.189362   C499.837097,15.361232 511.928528,17.259081 524.414612,18.633043  z"/>
      </svg>
      <svg x="200" y="200">
        <path id="C"  fill="#000000" opacity="1.000000" stroke="none" d=" M297.076477,267.549652   C295.140289,259.069305 295.038757,250.948547 296.667419,242.847626   C301.350159,219.555817 320.054596,210.841599 341.018036,213.140533   C346.312622,213.721146 351.546600,214.815796 355.968170,218.202286   C359.665344,221.033981 361.255005,224.755478 359.949951,229.178482   C358.643311,233.606720 355.163055,235.754044 350.650757,236.385910   C347.178711,236.872116 345.244873,235.523346 344.883118,231.996384   C344.679596,230.012314 344.611206,227.994293 344.185150,226.056839   C342.772614,219.633667 339.767609,216.433594 334.779236,215.788116   C328.557343,214.983032 323.680267,217.463165 320.622986,223.006943   C316.970825,229.629333 316.537720,237.037720 315.892548,244.277740   C314.718750,257.450134 315.037354,270.612396 320.353760,283.017883   C323.470551,290.290619 329.741089,293.072662 337.384583,292.841156   C344.794373,292.616760 350.554688,289.564117 353.666901,282.510559   C354.661377,280.256744 355.463837,277.918243 356.433685,275.413025   C360.933929,276.644409 360.707550,279.916931 359.940216,282.936157   C358.910645,286.987061 356.132690,289.928192 352.493927,291.934814   C338.543518,299.627960 310.859344,297.080780 301.079712,278.186920   C299.382263,274.907501 298.121094,271.503510 297.076477,267.549652  z"/>
        <path id="a1" fill="#000000" opacity="1.000000" stroke="none" d=" M401.922791,240.253250   C401.067902,236.637497 399.103088,234.965500 395.742767,235.188232   C392.179504,235.424408 391.131592,238.090042 390.517517,240.962051   C390.172363,242.576279 390.592407,244.439011 389.968689,245.889145   C388.998444,248.144928 390.713776,251.996368 386.140411,252.315033   C381.306244,252.651840 375.055847,250.271927 374.072021,246.923599   C372.911469,242.973541 373.557037,239.284439 377.334167,236.796371   C379.427612,235.417389 381.644531,234.273178 384.123505,233.728470   C390.669739,232.290100 397.282013,231.904785 403.917328,232.826721   C415.525055,234.439545 420.806488,240.561081 421.008362,252.856903   C421.172424,262.850067 421.024963,272.848022 421.057159,282.843750   C421.071716,287.366180 420.255981,292.447083 427.187683,292.193329   C426.974579,294.688416 425.535370,294.348633 424.506012,294.391174   C419.516449,294.597443 414.523895,294.781128 409.530853,294.837219   C405.263885,294.885193 400.904999,294.851776 402.574615,287.791748   C399.066071,291.911133 395.403229,294.420258 390.677979,295.349945   C385.898163,296.290405 381.438965,295.778351 377.196899,293.360474   C370.006104,289.261902 368.010895,282.631836 368.799957,275.039185   C369.499207,268.310669 373.929688,264.564728 380.190613,262.596252   C385.682587,260.869537 391.289185,260.490936 396.973877,260.651947   C400.840851,260.761444 402.986053,259.271027 402.662811,255.057129   C402.295044,250.262863 403.304993,245.405609 401.922791,240.253250  M401.488770,281.792908   C403.087708,276.934845 402.647095,271.918732 402.625122,266.937531   C402.617554,265.225067 402.495789,263.637299 400.311401,263.100922   C395.403381,261.895813 389.515442,265.312103 388.134979,270.247406   C387.269043,273.343323 387.050903,276.525146 387.387268,279.664703   C387.826813,283.767365 386.583344,289.308563 392.056915,290.587006   C397.876221,291.946167 399.188507,286.437958 401.488770,281.792908  z"/>
        <path id="l1" fill="#000000" opacity="1.000000" stroke="none" d=" M436.263916,294.406494   C434.783722,294.213806 433.465942,294.716766 432.830322,293.318848   C432.937927,292.995331 432.965820,292.489929 433.146973,292.427246   C441.080658,289.681030 441.597076,289.003845 441.607758,280.290344   C441.629791,262.305450 441.606659,244.320496 441.604706,226.335571   C441.603455,215.146973 441.605560,215.146973 432.841248,210.121384   C433.834534,208.114349 435.721863,208.817566 437.237671,208.790787   C442.731354,208.693695 448.240906,208.982224 453.718964,208.673187   C458.179932,208.421539 459.435852,210.178879 459.395111,214.468552   C459.213226,233.617462 459.309448,252.769012 459.305206,271.919617   C459.304810,273.751404 459.275421,275.583740 459.308990,277.414917   C459.430176,284.021423 457.568359,291.670715 468.007446,293.281342   C457.277161,294.732697 447.002106,295.146149 436.263916,294.406494  z"/>
        <path id="l2" fill="#000000" opacity="1.000000" stroke="none" d=" M480.226379,218.018677   C479.712311,212.526505 475.787567,211.518082 471.718811,210.925201   C472.139343,208.253189 473.980286,208.845673 475.264008,208.826202   C481.595001,208.730164 487.929230,208.838165 494.259735,208.727112   C497.455444,208.671051 498.691071,209.978531 498.669312,213.199631   C498.518524,235.526672 498.465851,257.854431 498.411926,280.182068   C498.389587,289.439240 498.423401,289.439331 506.508667,293.587646   C494.987701,294.586517 483.448364,294.409210 471.691193,294.347015   C471.959045,293.079865 471.942230,292.556854 472.100494,292.497070   C480.503906,289.321625 480.613892,289.229462 480.582794,279.906128   C480.514465,259.413666 480.397675,238.921341 480.226379,218.018677  z"/>
        <path id="M"  fill="#000000" opacity="1.000000" stroke="none" d=" M622.987427,294.428131   C615.264343,294.429077 608.038086,294.429077 600.621521,294.429077   C600.901062,293.172058 600.945068,292.602020 601.041626,292.592957   C607.866089,291.954071 608.027771,287.378693 607.958435,281.958038   C607.726196,263.796875 607.870300,245.630890 607.218140,227.286896   C604.380432,236.108459 601.501465,244.917023 598.715027,253.754730   C594.862122,265.974976 591.056763,278.210388 587.286255,290.456268   C586.618958,292.623413 586.052246,294.482849 583.153564,294.558441   C580.295166,294.633026 579.016785,293.289551 578.082581,290.812317   C570.034302,269.471558 561.908081,248.160156 553.800171,226.841904   C553.633667,226.404083 553.406189,225.989441 552.945557,225.004700   C552.945557,245.766769 552.945740,265.927734 552.945435,286.088684   C552.945374,290.096191 555.110168,291.664673 558.941101,291.770905   C560.734924,291.820679 563.006836,290.847473 564.624023,293.954773   C555.101440,293.954773 546.017273,293.954773 536.462769,293.954773   C538.360779,290.503815 541.190430,291.761749 543.329834,291.837952   C548.097961,292.007812 549.859253,290.061981 549.827759,285.339142   C549.692017,265.007080 549.784058,244.673569 549.764832,224.340607   C549.758606,217.780762 549.163330,217.270004 542.653564,216.989990   C540.634827,216.903168 538.262024,217.718140 536.780945,215.441071   C536.988220,215.087448 537.123413,214.587738 537.318176,214.563278   C546.920654,213.356995 556.547119,213.798874 566.157715,214.365707   C568.309937,214.492630 568.663330,216.810318 569.303528,218.485748   C575.364624,234.347534 581.393188,250.221741 587.457520,266.082275   C588.087585,267.729980 588.888489,269.312317 590.167908,272.171478   C593.002625,263.201538 595.443604,255.499725 597.870239,247.793396   C600.970459,237.948044 604.068970,228.102112 607.145264,218.249268   C607.820129,216.087814 608.611877,214.061600 611.352783,214.057831   C619.015808,214.047287 626.678955,214.065964 634.341736,214.116714   C635.189758,214.122314 635.936768,214.544495 636.214111,215.478241   C635.878662,216.689178 634.846008,216.769760 633.855835,216.923569   C627.204651,217.956512 626.442017,218.711136 626.382263,225.823288   C626.280151,237.988937 626.353149,250.156067 626.353210,262.322571   C626.353210,269.155823 626.260071,275.990723 626.381531,282.821838   C626.507874,289.930328 627.385620,290.796143 634.409058,291.878784   C635.002319,291.970276 635.546204,292.382355 637.294067,293.193817   C632.074829,295.257355 627.675293,294.011658 622.987427,294.428131  z"/>
        <path id="e"  fill="#000000" opacity="1.000000" stroke="none" d=" M644.967590,253.371582   C649.603271,230.649384 675.657471,227.727219 689.679260,237.672119   C697.590576,243.283157 698.642151,252.053589 698.688843,260.864655   C698.703369,263.614075 695.944763,263.281250 694.012573,263.291870   C685.192139,263.340424 676.365540,263.504486 667.553101,263.235657   C663.284485,263.105469 661.666382,264.741638 662.379333,268.745178   C663.277588,273.788940 663.079529,278.987793 664.959106,283.904785   C667.297729,290.022766 670.495239,292.764923 676.119751,292.841339   C682.376160,292.926361 687.160522,289.745056 689.270325,284.035583   C689.671448,282.950012 689.769165,281.746338 690.215759,280.685059   C690.802490,279.290894 690.441040,276.872437 692.853821,277.121033   C695.215271,277.364319 695.995056,279.388214 696.197998,281.479034   C696.613037,285.754913 694.565613,288.973541 691.147583,291.112183   C680.458618,297.800140 669.123230,297.364624 658.235779,292.304077   C648.156982,287.619446 644.752625,278.134064 643.935730,267.668945   C643.573303,263.025238 643.843445,258.360504 644.967590,253.371582  M673.175720,235.177444   C668.767334,234.723801 666.346497,237.360123 664.885132,240.935776   C662.725830,246.218735 662.873474,251.929016 662.388733,257.503357   C662.183350,259.865295 663.613525,260.695496 665.803162,260.669983   C669.614136,260.625580 673.425964,260.622772 677.237183,260.645844   C679.835938,260.661560 680.820251,259.243286 680.622620,256.857361   C680.240723,252.247604 680.002930,247.609833 679.287598,243.049210   C678.773499,239.772034 677.699036,236.518097 673.175720,235.177444  z"/>
        <path id="B"  fill="#000000" opacity="1.000000" stroke="none" d=" M779.923889,293.321533   C773.780701,294.975891 767.924500,294.304779 762.120728,294.369354   C753.463562,294.465637 744.804382,294.440399 736.146667,294.383667   C734.395447,294.372192 732.488159,294.899689 730.892395,293.529633   C731.217773,291.212341 733.077698,291.761871 734.379639,291.798737   C738.675476,291.920532 740.570129,289.518066 740.586975,285.672699   C740.678040,264.860229 740.680237,244.046936 740.588684,223.234482   C740.572510,219.562714 739.179626,216.699219 734.654114,216.956985   C733.215515,217.038925 731.644775,217.074921 730.710938,215.669846   C731.112061,213.958191 732.409729,213.978867 733.515381,214.001343   C747.146423,214.278427 760.820190,212.963745 774.403625,214.806335   C780.744202,215.666443 786.862976,217.482162 791.354187,222.466293   C798.776245,230.702744 796.124390,244.139648 786.190247,249.134689   C784.565918,249.951462 782.914490,250.714386 781.222595,251.527618   C781.779114,253.252197 783.354675,253.104263 784.457642,253.487244   C794.274902,256.896210 799.096802,263.089142 799.144714,272.542236   C799.189575,281.386719 794.171387,288.286530 785.103760,291.761505   C783.554932,292.355042 781.932861,292.757202 779.923889,293.321533  M759.346802,261.643616   C759.346252,270.107605 759.321716,278.571686 759.366577,287.035431   C759.374878,288.612030 758.892029,290.416748 760.816772,291.434296   C765.033325,293.663391 774.404053,291.199615 776.303772,286.693542   C780.204895,277.440094 779.963074,267.871185 776.210144,258.632629   C774.504456,254.433655 768.162598,252.867599 761.979980,254.208862   C757.884521,255.097366 759.857422,258.384338 759.346802,261.643616  M769.745972,249.501953   C771.773438,248.461487 773.065002,246.843292 773.833740,244.687714   C776.202881,238.043762 776.407776,231.317551 774.436951,224.594498   C772.926392,219.441269 769.388550,217.150223 764.005371,216.992584   C760.634888,216.893906 759.211304,218.058990 759.292542,221.610229   C759.479309,229.769501 759.511963,237.940460 759.284180,246.097656   C759.168640,250.237183 760.913269,251.553162 764.679932,250.880371   C766.142517,250.619125 767.570618,250.165085 769.745972,249.501953  z"/>
        <path id="a2" fill="#000000" opacity="1.000000" stroke="none" d=" M819.286926,295.179016   C812.492981,292.745483 808.259583,288.506989 806.938171,281.605743   C805.164795,272.343719 809.113586,265.603027 818.118286,262.644775   C823.252441,260.958069 828.526306,260.601044 833.890564,260.629333   C839.873047,260.660858 840.689819,259.891205 840.584778,254.108658   C840.497620,249.314987 841.298218,244.478745 839.783325,239.724426   C838.856201,236.814606 837.228943,235.116074 834.095032,235.151047   C830.837585,235.187408 829.300720,237.339203 828.676697,240.101395   C828.020386,243.006958 827.594116,245.994308 827.407410,248.967270   C827.238892,251.651276 825.819153,252.215698 823.502380,252.306686   C816.298584,252.589630 811.406311,248.921555 811.634827,243.344788   C811.772156,239.992630 813.359314,237.532242 816.300049,236.228531   C828.142090,230.978531 840.195557,230.340195 851.818054,236.419464   C858.195129,239.755051 858.733032,246.685745 858.931335,253.029160   C859.222717,262.347900 858.928894,271.683594 858.999878,281.011169   C859.037476,285.962433 857.585938,291.746368 865.849243,292.799255   C865.541260,293.278259 865.233276,293.757233 864.925293,294.236237   C857.599121,294.236237 850.249634,294.579529 842.957214,294.083496   C839.589783,293.854431 841.431946,289.928955 840.354248,287.709015   C835.021423,294.667877 828.027832,296.864105 819.286926,295.179016  M825.384766,273.116089   C825.375183,276.427887 825.206421,279.749084 825.401794,283.048737   C825.589417,286.217896 826.042542,289.645782 829.732727,290.657349   C833.678223,291.738922 835.810852,289.021790 837.558167,285.996613   C841.337402,279.453400 840.719604,272.281494 840.527283,265.176819   C840.472839,263.165741 839.140991,262.921844 837.431946,262.929077   C830.347229,262.958954 827.381775,265.228088 825.384766,273.116089  z"/>
        <path id="c"  fill="#000000" opacity="1.000000" stroke="none" d=" M916.616943,235.082733   C918.905151,236.266220 920.610168,237.568939 921.903076,239.359573   C924.599121,243.093552 924.266541,246.903885 921.808838,250.503326   C919.776062,253.480453 912.393311,255.409164 909.435913,254.111938   C907.652649,253.329727 907.752686,251.785797 907.729980,250.326553   C907.675415,246.833786 907.772766,243.344147 906.663574,239.951294   C905.828308,237.396484 904.519409,235.421249 901.574158,235.193893   C898.400818,234.948914 895.944275,236.292099 894.729614,239.155289   C893.700684,241.580750 892.715149,244.214081 892.585754,246.799240   C891.996216,258.575287 891.068359,270.388000 893.331482,282.103821   C894.617310,288.760712 898.040955,292.287109 903.458069,292.789032   C910.166687,293.410645 914.996155,290.364685 917.364990,283.896149   C918.152161,281.746552 918.707581,279.511993 919.374329,277.298462   C925.251953,279.498169 925.598450,285.788300 920.329956,290.265991   C915.959290,293.980652 910.632446,295.359680 905.097473,295.721741   C886.849060,296.915283 874.561646,288.345154 873.569397,269.440125   C873.351379,265.285736 873.523987,261.181274 873.701233,257.063416   C874.364929,241.646774 887.236023,230.546356 902.649719,232.177185   C907.252014,232.664124 911.962280,232.855225 916.616943,235.082733  z"/>
        <path id="k"  fill="#000000" opacity="1.000000" stroke="none" d=" M937.133057,294.425903   C934.133972,294.163116 931.451355,295.029846 929.018860,293.662018   C929.205811,293.044678 929.224792,292.530151 929.399414,292.470459   C937.623718,289.657623 937.625916,289.662170 937.625610,280.584778   C937.624939,261.926849 937.727478,243.268112 937.583740,224.611267   C937.496826,213.324005 939.312622,215.149658 929.334473,210.305740   C929.937500,208.269669 931.701233,208.809006 933.034180,208.790665   C939.030151,208.708145 945.035278,208.935867 951.022705,208.695114   C955.346252,208.521255 955.944519,210.945160 955.937683,214.343781   C955.909058,228.503632 955.944580,242.663620 955.955933,256.823547   C955.957642,258.970825 955.956116,261.118103 955.956116,262.892029   C957.069763,263.781433 957.657776,263.493317 958.127197,263.000366   C964.322266,256.495056 970.653748,250.110413 976.629150,243.408569   C980.071106,239.548218 979.019104,237.379959 973.907288,236.489700   C971.591492,236.086395 969.008972,237.092972 966.953064,234.454208   C975.734375,234.454208 984.515625,234.454208 994.280273,234.454208   C991.089722,237.530975 987.305115,237.405045 984.715332,239.688202   C980.203796,243.665497 976.441711,248.333664 972.137939,252.484665   C970.686035,253.884964 970.553406,255.276550 971.663940,256.909027   C978.969299,267.648041 986.290222,278.376648 993.530090,289.159729   C994.633850,290.803711 996.972900,291.189575 997.578979,293.297729   C987.430115,297.139801 975.375977,293.749817 969.661682,285.388153   C966.561829,280.852203 963.678711,276.168701 960.644531,271.587036   C959.775024,270.274109 959.410400,268.397583 956.714355,268.135040   C955.440735,274.985596 955.226135,281.883911 956.770020,288.617401   C957.497620,291.790863 961.622437,291.470825 964.276123,293.119141   C955.393127,295.127930 946.462524,294.111237 937.133057,294.425903  z"/>
      </svg>
    </>
  )
}
