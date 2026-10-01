import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, RotateCw, Sparkles, X } from "lucide-react";
import "./styles.css";

const encryptedFragments = {
  3: "wvxybl rh ltlynoh xbl nltlyhz lt so tv zl kozowh, zvrv jyljl kl mvysh lewvtnltjohr.",
  4: "Ij asbis, iob pfwzzoobis eofo obozwñof zo ehwqdzduwo rsz ajbrd n hdzjqwdbof efdpzsaoh,",
  5: "c xegeu uwhtg wo eqtvqektewkvq ewcofq ug vtcvc fg ñktctvg cm gurgelq.",
  6: "Mx kñx t oxvxm nñ jlijbt fxgnx nx tntvt, vlxtgwi ytemtm texlntm wx mxzñlbwtw,",
  7: "dfdfcclxñzeo bfo lvqz xz eo bfoñl msox, bfo xz ocod dfpsnsoxeo z ñfñlxñz ño ws lwzc.",
  8: "Mtd vznjwt azprjwrfw jxj xnxyjqf ij nrxjlzwnfijx, gtwwfw jxf nrktwqfhntr ij yz gfxj ij ifytx",
  9: "u ñaaoyñexeñ pq ylzecl bqajpa ylj qjw qjeyw rañzwz ejnqaexñwjpwxha.",
  10: "Mzma mabailapbki, jpwswñpki g kwatpkitmubm xmznmkbi, g bm sw dwg i lmtwabziz.",
  11: "Klj siujgfj df jfd ld udiutf, jfd bq tucfjkriqsyfd cqj xuicfjq tu bq kuofiyq tub sqfj;",
  12: "xp ghvrughp wdp shuihfwr grpgh olv ghgrv b olv shpvdolhpwrv ruelwdp vlp lpwhpflrp gh hvfdsdu.",
  13: "Yh ñon ukyhn 1.63 gyñmjn xy ynñuñomu, wjhwymñun gun amupyxux loy oh uaodymj hyamj,",
  14: "bubszfñep upeb nj bufñdjpñ tjñ rvf zp qvfeb, ñj rvjfsb, pqpñfs sftjtuñdjb.",
  15: "Yuengq, cbe rnibe, n geniqf pq yuf bvbf: qfn onen pq fuyqgeun uycqonñxq,",
  16: "rsq nhnq glkclqnq bnlbc kc ñgcpbn y bgypgn, cqy lypgx ñcpdgjyby w rsq kchgjjyq.",
  17: "H tdnox, tj ñqbqlj bn lxveqnacn nv jacn ydax; mnbmn cd ltjeqldtj pjbcj cd lqvcdaj,",
  18: "ljrqrk mer tmjnr imv ezexmer vtmrtzge uv trctmcg zelvxjrc hgujzr jvkogcnvj.",
  19: "Xy iwteohe tiuyire, oe eptlomxyh hi xyw gehivew e gehe exvmfyxs xycs",
  20: "mpz ckinv gv cznhkñpnv diizbvwgz yz opñ nvdxzñ, hz yzevi ñdhlgzhzioz voknidok.",
  21: "Km epm ñgmyoa wwphme peae agfqtfe cgp opsemqtmy ñgmwcgtpd wartñm pefpeftñm op wa ntpy cgp fp cgopmy,",
  22: "u iagsju kyzgy yñs sgjg lxkszk g rñ, rk xkieaxjgy vux wak e vgxg wak kyzue bñbu.",
  23: "Dqdr tmz zmñlzkhz oqdbhñrz, dlhshdmcñ eqdbtembhzr odqedbszr btzmcñ bzmzsr ldkñchzr",
  24: "tc kc xcvati gkt ce ctreixjpi hprxecpaxoph, fehgkt ta phjt ñp lxect tc jk sxitde ehxvxncpa.",
  25: "Uuñfkvyc nyc kxyc prbkwny ñw ñu vrcvy ñsñ, cñdñmrñwdyc dbñrwdk nrkc nkwnoyvñ meñwdk",
  26: "ab ñrb jf pfpqbjx km crkzfmkx pf qr km bpqxp bk bi, pfbjnob nomzbxpkamqb bk jf zxybwx.",
  27: "Hgj vkg lv veljvxg vklv dvekrav rkz, vetjzhlrug p wjrxvnelrug, gtmclg srag trhrk uv tjzhlgxjrwzr.",
  28: "Rqtswg wo cñqt fg guvc ñciokvwf, vco kttcekqocnñgovg itcofg a vco tgcn, oq rqfkc govtgicrtug go vgzvq rncoq.",
  29: "Tljlzoahih xbl ltalntkolyhz xbl, zot oswvyahy rhz kbkhz xbl ab sltal otaltal wyvjlzhy,",
  30: "jz dsowaco doco ov woxdlto bfo odaocl doc ñodnfmsocez, j ef, Osvoox, dsowaco docld ws fxsnl vvlgo.",
};

const decryptedFragments = {
  1: "Eileen, para entender la magnitud exacta de lo que siento por ti,",
  2: "la ciencia tendría que reescribir las leyes de la termodinámica,",
  3: "porque la energía que generas en mí no se disipa, solo crece de forma exponencial.",
  4: "Tu mente, tan brillante para analizar la psicología del mundo y solucionar problemas,",
  5: "a veces sufre un cortocircuito cuando se trata de mirarte al espejo.",
  6: "Sé que a veces tu propia mente te ataca, creando falsas alertas de seguridad,",
  7: "susurrándote que algo no te queda bien, que no eres suficiente o dudando de mi amor.",
  8: "Hoy quiero vulnerar ese sistema de inseguridades, borrar esa información de tu base de datos",
  9: "y reescribir tu código fuente con una única verdad inquebrantable.",
  10: "Eres estadística, biológica y cósmicamente perfecta, y te lo voy a demostrar.",
  11: "Tus crespos no son un enredo, son la demostración más hermosa de la teoría del caos;",
  12: "un desorden tan perfecto donde mis dedos y mis pensamientos orbitan sin intención de escapar.",
  13: "En tus apenas 1.63 metros de estatura, eres mas atractiva que un agujero negro,",
  14: "atrayendo toda mi atención sin que pueda, ni quiera, oponer resistencia.",
  15: "Mírate, por favor, a través de mis ojos: esa cara de simetría impecable,",
  16: "tus ojos inmensos donde me pierdo a diario, esa nariz perfilada y tus mejillas.",
  17: "Y luego, la física se convierte en arte puro; desde tu clavícula hasta tu cintura,",
  18: "trazas una curva que ninguna ecuación de cálculo integral podría resolver.",
  19: "Tu espalda pequeña, la amplitud de tus caderas y cada atributo tuyo",
  20: "que honra la hermosura innegable de tus raíces, me dejan simplemente atónito.",
  21: "Ya sea cuando llevas esos outfits que desafían cualquier lógica estética de lo bien que te quedan,",
  22: "o cuando estás sin nada frente a mí, me recuerdas por qué y para qué estoy vivo.",
  23: "Eres una anomalía preciosa, emitiendo frecuencias perfectas cuando cantas melodías",
  24: "en un inglés que no necesitas racionalizar, porque el arte ya viene en tu diseño original.",
  25: "Llevamos dos años girando en el mismo eje, setecientos treinta días dándome cuenta",
  26: "de que mi sistema no funciona si tú no estás en él, siempre procesándote en mi cabeza.",
  27: "Por eso te entrego este mensaje así, encriptado y fragmentado, oculto bajo capas de criptografía.",
  28: "Porque un amor de esta magnitud, tan irracionalmente grande y tan real, no podía entregarse en texto plano.",
  29: "Necesitaba que entendieras que, sin importar las dudas que tu mente intente procesar",
  30: "yo siempre seré el mensaje que espera ser descubierto, y tú, Eileen, siempre serás mi única llave.",
};

const fragmentIds = Array.from({ length: 30 }, (_, index) => index + 1);
const cipherChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789áéíóúñ";

function OrientationGuard() {
  return (
    <div className="orientation-guard">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rotate-card"
      >
        <div className="rotate-icon">
          <RotateCw size={34} strokeWidth={1.4} />
        </div>
        <span className="eyebrow">Una pequeña instrucción</span>
        <h1>
          Gira tu teléfono
          <br />
          para continuar la magia<span className="gold-dot">.</span>
        </h1>
        <p>
          Esta carta fue diseñada para leerse de lado a lado, como nuestros
          recuerdos.
        </p>
      </motion.div>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState("cover");
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth >= window.innerHeight,
  );

  useEffect(() => {
    const onResize = () =>
      setIsLandscape(window.innerWidth >= window.innerHeight);
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  const submitCode = (event) => {
    event.preventDefault();
    if (code.trim().toUpperCase() === "EILEEN2026") {
      setVerified(true);
      window.setTimeout(() => setScreen("finale"), 650);
    }
  };

  return (
    <main className={screen === "finale" ? "app finale-mode" : "app"}>
      {!isLandscape && <OrientationGuard />}
      {isLandscape && (
        <AnimatePresence mode="wait">
          {screen === "cover" && <Cover onContinue={() => setScreen("hub")} />}
          {screen === "hub" && (
            <Hub
              code={code}
              setCode={setCode}
              onSubmit={submitCode}
              verified={verified}
              selected={selected}
              setSelected={setSelected}
              onBack={() => setScreen("cover")}
            />
          )}
          {screen === "finale" && <Finale />}
        </AnimatePresence>
      )}
    </main>
  );
}

function Ambient({ finale = false }) {
  return (
    <div
      className={`ambient ${finale ? "ambient-finale" : ""}`}
      aria-hidden="true"
    >
      <span className="orb orb-one" />
      <span className="orb orb-two" />
      <span className="orb orb-three" />
      <span className="grain" />
      {Array.from({ length: 14 }, (_, index) => (
        <i key={index} className="particle" style={{ "--i": index }} />
      ))}
    </div>
  );
}

function Cover({ onContinue }) {
  return (
    <motion.section
      className="screen cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
      transition={{ duration: 0.8 }}
    >
      <Ambient />
      <div className="cover-mark">
        <span>02</span>
        <div />
        <span>∞</span>
      </div>
      <div className="cover-content">
        <span className="eyebrow">Una carta en código · 2024—2026</span>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Feliz Segundo
          <br />
          <em>Aniversario</em>
          <span className="gold-dot">.</span>
        </motion.h1>
        <p className="cover-subtitle">Para Eileen, mi constante favorita.</p>
      </div>
      <button className="continue-button" onClick={onContinue}>
        Continuar <ArrowRight size={16} />
      </button>
      <div className="page-number">
        01 <span>/</span> 03
      </div>
    </motion.section>
  );
}

function Hub({
  code,
  setCode,
  onSubmit,
  verified,
  selected,
  setSelected,
  onBack,
}) {
  return (
    <motion.section
      className="screen hub"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.65 }}
    >
      <Ambient />
      <header className="hub-header">
        <button className="back-button" onClick={onBack}>
          ← <span>Volver</span>
        </button>
        <div className="hub-symbol">
          C<span>·</span>02
        </div>
        <div className="page-number">
          02 <span>/</span> 03
        </div>
      </header>
      <div className="hub-layout">
        <div className="hub-copy">
          <span className="eyebrow">
            El archivo secreto · acceso restringido
          </span>
          <h2>
            Aquí están todas
            <br />
            las piezas de <em>esto</em>
            <br />
            que sentimos<span className="gold-dot">.</span>
          </h2>
          <p>
            Aquí están todas las piezas de nuestro sistema, encriptadas. Solo tú
            tienes la llave para revelar el código fuente de esto que sentimos.{" "}
            <strong>Busca en tus regalos.</strong>
          </p>
          <form className="code-form" onSubmit={onSubmit}>
            <label htmlFor="secret-code">Introduce la clave</label>
            <div className="input-wrap">
              <input
                id="secret-code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="escribe aquí..."
                autoComplete="off"
              />
              <button type="submit">Verificar</button>
            </div>
            <small>
              {verified
                ? "Clave aceptada · iniciando secuencia"
                : "Pista: el nombre de quien lo recibe + el año"}
            </small>
          </form>
        </div>
        <motion.div
          className="fragments-panel"
          animate={{ opacity: verified ? 0 : 1, y: verified ? 20 : 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="panel-heading">
            <span>Fragmentos encontrados</span>
            <span>01—30</span>
          </div>
          <div className="fragment-grid">
            {fragmentIds.map((id) => (
              <button
                className={`fragment-button fragment-${id} ${id <= 2 ? "decoded" : ""} ${selected === id ? "active" : ""}`}
                key={id}
                onClick={() => setSelected(id)}
              >
                <span className="fragment-number">
                  {String(id).padStart(2, "0")}
                </span>
                <i>
                  {id <= 2
                    ? "descifrado"
                    : selected === id
                      ? "abierto"
                      : "sellado"}
                </i>
                <small>
                  {id <= 2 ? decryptedFragments[id] : encryptedFragments[id]}
                </small>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {selected && (
          <FragmentModal id={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

function FragmentModal({ id, onClose }) {
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="cipher-modal"
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          <X size={17} />
        </button>
        <span className="eyebrow">
          Fragmento {String(id).padStart(2, "0")} · cifrado
        </span>
        {id <= 2 ? (
          <>
            <div className="cipher-line">Fragmento descifrado</div>
            <p className="decoded-text">{decryptedFragments[id]}</p>
            <small>Esta pieza ya reveló una parte de la verdad.</small>
          </>
        ) : (
          <>
            <div className="cipher-line">
              A = {String.fromCharCode(65 + ((id * 7) % 26))}
            </div>
            <p>{encryptedFragments[id]}</p>
            <small>Esta pieza espera a que encuentres la llave.</small>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

function Finale() {
  const [revealed, setRevealed] = useState([1, 2]);
  const ids = Object.keys(decryptedFragments).map(Number);
  useEffect(() => {
    const timers = ids
      .filter((id) => id > 2)
      .map((id, index) =>
        window.setTimeout(
          () => setRevealed((current) => [...current, id]),
          520 + index * 260,
        ),
      );
    return () => timers.forEach(window.clearTimeout);
  }, []);
  const complete = revealed.length === ids.length;
  return (
    <motion.section
      className="screen finale"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Ambient finale />
      <div className="finale-top">
        <span className="eyebrow">El código fuente · descifrado</span>
        <span className="hub-symbol">
          C<span>·</span>02
        </span>
        <span className="page-number">
          03 <span>/</span> 03
        </span>
      </div>
      <div className="poem-wrap">
        <motion.div
          className="poem-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Sparkles size={17} />
          <span>Una verdad inquebrantable</span>
        </motion.div>
        <h2>
          Para <em>Eileen</em>
          <span className="gold-dot">.</span>
        </h2>
        <div className="poem">
          {ids.map((id) => (
            <PoemLine key={id} id={id} revealed={revealed.includes(id)} />
          ))}
        </div>
        <AnimatePresence>
          {complete && (
            <motion.div
              className="final-signature"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span>Con todo mi amor,</span>
              <strong>Siempre tuyo</strong>
              <i>✦</i>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

function PoemLine({ id, revealed }) {
  const text = decryptedFragments[id];
  const encrypted = useMemo(
    () =>
      [...text]
        .map((character, index) =>
          character === " "
            ? " "
            : cipherChars[(id * 13 + index * 7) % cipherChars.length],
        )
        .join(""),
    [id, text],
  );
  return (
    <motion.p className="poem-line" layout>
      <AnimatePresence mode="wait" initial={false}>
        {revealed ? (
          <motion.span
            key="decrypted"
            className="poem-revealed-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {text}
          </motion.span>
        ) : (
          <motion.span
            key="encrypted"
            className="poem-encrypted-text"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {encrypted}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.p>
  );
}

createRoot(document.getElementById("root")).render(<App />);
