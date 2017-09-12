# WebVR :eyeglasses:

> WebVR is a JavaScript API for creating immersive 3D, Virtual Reality experiences in your browser.
<p align="right"><strong>- <a href="https://webvr.rocks/">https://webvr.rocks/</a><strong></p>

**Det finns inget stöd för iOS/Safari alls.**

**I undermapparna i detta repo ligger koden för de båda hemsidorna på min hemsida**

* [https://jesperorb.com/vr](https://jesperorb.com/vr)
  * VR implementerat med `A-FRAME`
* [https://jesperorb.com/react-vr](https://jesperorb.com/vr)
  * VR implementerat med `ReactVR`


### Enable WebVR for Chrome
 
_Enable WebVR: Chrome for Android_
<a href="https://webvr.rocks/chrome_for_android#android">![Enable WebVR](https://i.imgur.com/OM757UA.png)</a>

Om du har stöd för **Google Cardboard** och ska använda Google Cardboard så borde du ha en liten ikon i högra hörnet:

![Cardboard Icon](https://i.imgur.com/piAqMDw.png)

Samt om du trycker på ikonen så borde du få följande vy, denna vy är till för om du har ett VR-headset. Annars använd vanliga vyn:

![Google Cardboard](https://i.imgur.com/qpl0JNk.png)


# A-FRAME

* [**`A-FRAME`**](https://aframe.io/)
    * Dokumentation för A-FRAME
* [**`A-FRAME` examples**](https://aframe.io/examples/)
    * Besök någon av dessa exempel i antingen en webbläsare som stödjer WebVR eller i en mobil där du har ordnat WebVR. 

# ReactVR

* [**`ReactVR`**](https://facebook.github.io/react-vr/)
    * Dokumentationen för ReactVR, bristfällig dock.    
* [**`ReactVR` experiments**](https://github.com/nikgraf/webvr-experiments)
    * Ett GitHub-repo med olika exempel som använder både ReactVR samt A-FRAME         


## `A-FRAME` exempel

Kopiera koden och lägg den i en `index.html`. **Gå till din `index.html` via localhost** (Viktigt, servera inte via `file://`). Starta din localhost via t.ex. _MAMP/WAMP etc._

_Kod:_
```html
<html>
<head>
  <!-- Include the library -->
  <script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
</head>

<body>
  <a-scene>
    <!--Create a box: x, y, z. -4 means in front of you, 1 means up -->
    <a-box color="#EF2D5E" position="0 1 -4"></a-box>
    <a-camera>
      <a-cursor></a-cursor> <!-- Our cursor for pointing, onhover etc -->
    </a-camera>
  </a-scene>
</body>
</html>
```


__Byt färg på box med `event-set-component`__
```html
<html>
<head>
  <!-- Include the library -->
  <script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
  <!-- Event set component, easier handling of simple events -->
  <script src="https://unpkg.com/aframe-event-set-component@3.0.3/dist/aframe-event-set-component.min.js"></script>  
</head>

<body>
  <a-scene>
    <a-box  color="#ec4570" 
            position="0 2 -3" 
            rotation="0 45 45" 
            event-set__enter="_event: mouseenter; color: #f1e455" 
            event-set__leave="_event: mouseleave; color: #ec4570">
    </a-box>

    <a-camera>
      <a-cursor></a-cursor>
    </a-camera>
  </a-scene>
</body>
</html>
```


### Deploy your WebVR app!

Ovan är bara en statisk hemsida, du kan använda *GitHub Pages* för att lägga upp dessa sidor.

Ett annat enkelt sätt att lägga upp en sida förutom Github Pages är [**now**](https://zeit.co/now). Denna tjänst kan vi även använda senare när vi ska lägga upp vår `react`-app.

_Installera now via terminalen/kommandotolken_
```bash
npm i -g now-cli
```

* Kopiera exempelkoden ovan och skapa en `index.html` i valfri mapp. `cd` in i den mappen där dina filer ligger och kör följande kommando:

```
now 
```

* Slutför login-proceduren som kommer upp och efter den så borde du få tillbaka en URL i terminalen. Kopiera den URLen och klistra in i webbläsaren, DONE.