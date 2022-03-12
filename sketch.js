var r = " ";
var bg;
var t = "th out of 57";

function preload(){
  bg = loadImage("images/anime.jpg");
  hsdxd = loadImage("images/hsdxd.png");
  hsotd = loadImage("images/hsotd.png");
  ovf = loadImage("images/of.jpg");
  ctd = loadImage("images/ctd.png");
  dtwmmn = loadImage("images/dtwmmn.jpg");
  kk = loadImage("images/kk.png");
  ah = loadImage("images/ah.png");
  mkdm = loadImage("images/mkdm.png");
  kkc = loadImage("images/kkc.png");
  oreimo = loadImage("images/oreimo.png");
  acnsf = loadImage("images/acnsf.jpg");
  bc = loadImage("images/bc.png");
  fz = loadImage("images/fz.png");
  ragf = loadImage("images/ragf.jpg");
  apnl = loadImage("images/apnl.png");
  fmab = loadImage("images/fmab.png");
  ksliw = loadImage("images/ksliw.png");
  dgf = loadImage("images/dgf.jpg");
  agk = loadImage("images/agk.png");
  jojo = loadImage("images/jojo.png");
  mha = loadImage("images/mha.png");
  ff = loadImage("images/ff.png");
  nora = loadImage("images/nora.png");
  ylia = loadImage("images/ylia.png");
  bleach = loadImage("images/bleach.jpg");
  cg = loadImage("images/cg.png");
  sds = loadImage("images/sds.png");
  rez = loadImage("images/rez.png");
  bloodC = loadImage("images/bloodC.png");
  hxh = loadImage("images/hxh.png");
  ft = loadImage("images/ft.png");
  tm = loadImage("images/tm.jpg");
  trotsh = loadImage("images/trotsh.jpg");
  overload = loadImage("images/overload.png");
  ds = loadImage("images/ds.png");
  gc = loadImage("images/gc.png");
  mp100 = loadImage("images/mp100.png");
  hori = loadImage("images/hori.jpg");
  gintama = loadImage("images/gintama.png");
  klk = loadImage("images/klk.jpg");
  rc = loadImage("images/rc.png");
  bgs = loadImage("images/bgs.png");
  mia = loadImage("images/mia.png");
  a = loadImage("images/a.jpg");
  asv = loadImage("images/asv.png");
  yn = loadImage("images/yn.png");
  sao = loadImage("images/sao.jpg");
  lc = loadImage("images/lc.jpg");
  fd = loadImage("images/fd.jpg");
  bosf = loadImage("images/bosf.jpg");
  wls = loadImage("images/wls.png");
  idi = loadImage("images/idi.png");
  nisekoi = loadImage("images/nisekoi.jpg");
  htkam = loadImage("images/htkam.jpg");
  ps = loadImage("images/ps.jpg");
  roh = loadImage("images/roh.jpg");
  ttigraas = loadImage("images/ttigraas.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
}

function draw() {
  fill("white");
  textSize(height/20);
  text(r,width/20,height/20);

  if (keyWentDown(32) || touches.length>0){
    switchC();
    touches = [];
  }
  drawSprites();
}

function switchC() {
  switch (r = Math.round(random(0,56))) {
    case 0:
      r = "1"+t;
      background(hsdxd);
    break;
    case 1:
      r = "2"+t;
      background(hsotd);
    break;
    case 2:
      r = "3"+t;
      background(ovf);
    break;
    case 3:
      r = "4"+t;
      background(ctd);
    break;
    case 4:
      r = "5"+t;
      background(dtwmmn);
    break;
    case 5:
      r = "6"+t;
      background(kk);
    break;
    case 6:
      r = "7"+t;
      background(ah);
    break;
    case 7:
      r = "8"+t;
      background(mkdm);
    break;
    case 8:
      r = "9"+t;
      background(kkc);
    break;
    case 9:
      r = "10"+t;
      background(oreimo);
    break;
    case 10:
      r = "11"+t;
      background(acnsf);
    break;
    case 11:
      r = "12"+t;
      background(bc);
    break;
    case 12:
      r = "13"+t;
      background(fz);
    break;
    case 13:
      r = "14"+t;
      background(ragf);
    break;
    case 14:
      r = "15"+t;
      background(apnl);
    break;
    case 15:
      r = "16"+t;
      background(fmab);
    break;
    case 16:
      r = "17"+t;
      background(ksliw);
    break;
    case 17:
      r = "18"+t;
      background(dgf);
    break;
    case 18:
      r = "19"+t;
      background(agk);
    break;
    case 19:
      r = "20"+t;
      background(jojo);
    break;
    case 20:
      r = "21"+t;
      background(mha);
    break;
    case 21:
      r = "22"+t;
      background(ff);
    break;
    case 22:
      r = "23"+t;
      background(nora);
    break;
    case 23:
      r = "24"+t;
      background(ylia);
    break;
    case 24:
      r = "25"+t;
      background(bleach);
    break;
    case 25:
      r = "26"+t;
      background(cg);
    break;
    case 26:
      r = "27"+t;
      background(sds);
    break;
    case 27:
      r = "28"+t;
      background(rez);
    break;
    case 28:
      r = "29"+t;
      background(bloodC);
    break;
    case 29:
      r = "30"+t;
      background(hxh);
    break;
    case 30:
      r = "31"+t;
      background(ft);
    break;
    case 31:
      r = "32"+t;
      background(tm);
    break;
    case 32:
      r = "33"+t;
      background(trotsh);
    break;
    case 33:
      r = "34"+t;
      background(overload);
    break;
    case 34:
      r = "35"+t;
      background(ds);
    break;
    case 35:
      r = "36"+t;
      background(gc)
    break;
    case 36:
      r = "37"+t;
      background(mp100);
    break;
    case 37:
      r = "38"+t;
      background(hori);
    break;
    case 38:
      r = "39"+t;
      background(gintama);
    break;
    case 39:
      r = "40"+t;
      background(klk);
    break;
    case 40:
      r = "41"+t;
      background(rc);
    break;
    case 41:
      r = "42"+t;
      background(bgs);
    break;
    case 42:
      r = "43"+t;
      background(mia);
    break;
    case 43:
      r = "44"+t;
      background(a);
    break;
    case 44:
      r = "45"+t;
      background(asv);
    break;
    case 45:
      r = "46"+t;
      background(yn)
    break;
    case 46:
      r = "47"+t;
      background(sao);
    break;
    case 47:
      r = "48"+t;
      background(lc);
    break;
    case 48:
      r = "49"+t;
      background(fd);
    break;
    case 49:
      r = "50"+t;
      background(bosf);
    break;
    case 50:
      r = "51"+t;
      background(wls);
    break;
    case 51:
      r = "52"+t;
      background(idi);
    break;
    case 52:
      r = "53"+t;
      background(nisekoi);
    break;
    case 53:
      r = "54"+t;
      background(htkam);
    break;
    case 54:
      r = "55"+t;
      background(ps);
    break;
    case 55:
      r = "56"+t;
      background(roh);
    break;
    case 56:
      r = "57"+t;
      background(ttigraas);
    break;
  }
}