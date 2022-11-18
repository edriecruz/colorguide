import React, { useState } from 'react'
import './index.scss'

const Magic = () => {
    
  const [color, setColor] = useState("black");
  const [backgroundcolor, setBackgroundColor] = useState("white");


  return (
    <div className='magic'>
      
        <div className="text">
            <p 
            style={{
              color: color,
              backgroundColor: backgroundcolor,
              "transition": "ease .5s"
            }}
            contentEditable="true"
            >Change Text...</p>
        </div>

        <div className='jump-to'>
          <div className='jump-to-bg'>
            <p>Change Background Color</p>
            <ul>
              <li><a href='#six-bg' title='Jump to Six Tertiary Section'>Six Tertiary</a></li>
              <li><a href='#monochrome-bg' title='Jump to Monochrome Section'>Monochrome</a></li>
              <li><a href='#red-bg' title='Jump to Shades of Red Section'>Red</a></li>
              <li><a href='#orange-bg' title='Jump to Shades of Orange Section'>Orange</a></li>
              <li><a href='#yellow-bg' title='Jump to Shades of Yellow Section'>Yellow</a></li>
              <li><a href='#green-bg' title='Jump to Shades of Green Section'>Green</a></li>
              <li><a href='#g&b-bg' title='Jump to Green & Blue Combo Section'>Green & Blue</a></li>
              <li><a href='#blue-bg' title='Jump to Shades of Blue Section'>Blue</a></li>
              <li><a href='#purple-bg' title='Jump to Shades of Purple Section'>Purple</a></li>
            </ul>
          </div>

          <div className='jump-to-font'>
            <p>Change Font Color</p>
            <ul>
              <li><a href='#six-color' title='Jump to Six Tertiary Section'>Six Tertiary</a></li>
              <li><a href='#monochrome-color' title='Jump to Monochrome Section'>Monochrome</a></li>
              <li><a href='#red-color' title='Jump to Shades of Red Section'>Red</a></li>
              <li><a href='#orange-color' title='Jump to Shades of Orange Section'>Orange</a></li>
              <li><a href='#yellow-color' title='Jump to Shades of Yellow Section'>Yellow</a></li>
              <li><a href='#green-color' title='Jump to Shades of Green Section'>Green</a></li>
              <li><a href='#g&b-color' title='Jump to Green & Blue Combo Section'>Green & Blue</a></li>
              <li><a href='#blue-color' title='Jump to Shades of Blue Section'>Blue</a></li>
              <li><a href='#purple-color' title='Jump to Shades of Purple Section'>Purple</a></li>
            </ul>
          </div>

        </div>
              
        <div className='buttons'>

            <div className='background'>

            <div className='six-tertiary' id='six-bg'>
                  <p>Six Tertiary</p>

                    {/* red button */}
                    <button 
                    onClick={() => setBackgroundColor("red")}
                    style={{
                      "border": "red 3px solid"
                    }}>Red<br/>#FF0000</button>

                    {/* orange button */}
                    <button 
                    onClick={() => setBackgroundColor("orange")}
                    style={{
                      "border": "orange 3px solid"
                    }}>Orange<br/>#FFA500</button>

                    {/* yellow button */}
                    <button 
                    onClick={() => setBackgroundColor("yellow")}
                    style={{
                      "border": "yellow 3px solid"
                    }}>Yellow<br/>#FFFF00</button>

                    {/* green button */}
                    <button 
                    onClick={() => setBackgroundColor("green")}
                    style={{
                      "border": "green 3px solid"
                    }}>Green<br/>#008000</button>

                    {/* blue button */}
                    <button 
                    onClick={() => setBackgroundColor("blue")}
                    style={{
                      "border": "blue 3px solid"
                    }}>Blue<br/>#0000FF</button>

                    {/* purple button */}
                    <button 
                    onClick={() => setBackgroundColor("purple")}
                    style={{
                      "border": "purple 3px solid"
                    }}>Purple<br/>#800080</button>
                </div>

                <div className='monochrome' id='monochrome-bg'>
                  <p>Monochrome</p>

                  
                    {/* black button */}
                    <button 
                    onClick={() => setBackgroundColor("black")}
                    style={{
                      "border": "black 2px solid"
                    }}>Black<br/>#000000</button>

                    
                    {/* dark slate gray button */}
                    <button 
                    onClick={() => setBackgroundColor("darkslategray")}
                    style={{
                      "border": "darkslategray 2px solid"
                    }}>DarkSlateGray<br/>#2F4F4F</button>

                    
                    {/* dim gray button */}
                    <button 
                    onClick={() => setBackgroundColor("dimgray")}
                    style={{
                      "border": "dimgray 2px solid"
                    }}>DimGray<br/>#696969</button>

                    
                    {/* slate gray button */}
                    <button 
                    onClick={() => setBackgroundColor("slategray")}
                    style={{
                      "border": "slategray 2px solid"
                    }}>SlateGray<br/>#708090</button>

                    
                    {/* light slate gray button */}
                    <button 
                    onClick={() => setBackgroundColor("lightslategray")}
                    style={{
                      "border": "lightslategray 2px solid"
                    }}>LightSlateGray<br/>#778899</button>

                    
                    {/* gray button */}
                    <button 
                    onClick={() => setBackgroundColor("gray")}
                    style={{
                      "border": "gray 2px solid"
                    }}>Gray<br/>#808080</button>

                    
                    {/* dark gray button */}
                    <button 
                    onClick={() => setBackgroundColor("darkgray")}
                    style={{
                      "border": "darkgray 2px solid"
                    }}>DarkGray<br/>#A9A9A9</button>

                    
                    {/* silver button */}
                    <button 
                    onClick={() => setBackgroundColor("silver")}
                    style={{
                      "border": "silver 2px solid"
                    }}>Silver<br/>#C0C0C0</button>

                    
                    {/* light gray button */}
                    <button 
                    onClick={() => setBackgroundColor("lightgray")}
                    style={{
                      "border": "lightgray 2px solid"
                    }}>LightGray<br/>#D3D3D3</button>

                    {/* gainsboro button */}
                    <button 
                    onClick={() => setBackgroundColor("gainsboro")}
                    style={{
                      "border": "gainsboro 2px solid"
                    }}>Gainsboro<br/>#DCDCDC</button>

                    {/* white smoke button */}
                    <button 
                    onClick={() => setBackgroundColor("whitesmoke")}
                    style={{
                      "border": "whitesmoke 2px solid"
                    }}>WhiteSmoke<br/>#F5F5F5</button>

                    {/* white button */}
                    <button 
                    onClick={() => setBackgroundColor("white")}
                    style={{
                      "border": "white 2px solid"
                    }}>White<br/>#FFFFFF</button>

                </div>
                
                <div className='red-shades' id='red-bg'>
                <p>Shades of Red</p>

                    {/* maroon button */}
                    <button 
                    onClick={() => setBackgroundColor("maroon")}
                    style={{
                      "border": "maroon 2px solid"
                    }}>Maroon<br/>#800000</button>

                    {/* dark red button */}
                    <button 
                    onClick={() => setBackgroundColor("darkred")}
                    style={{
                      "border": "darkred 2px solid"
                    }}>DarkRed<br/>#8B0000</button>

                    {/* saddle brown button */}
                    <button 
                    onClick={() => setBackgroundColor("saddlebrown")}
                    style={{
                      "border": "saddlebrown 2px solid"
                    }}>SaddleBrown<br/>#8B0000</button>

                    {/* sienna button */}
                    <button 
                    onClick={() => setBackgroundColor("sienna")}
                    style={{
                      "border": "sienna 2px solid"
                    }}>Sienna<br/>#A0522D</button>

                    {/* brown button */}
                    <button 
                    onClick={() => setBackgroundColor("brown")}
                    style={{
                      "border": "brown 2px solid"
                    }}>Brown<br/>#FA8072</button>

                    {/* fire brick button */}
                    <button 
                    onClick={() => setBackgroundColor("firebrick")}
                    style={{
                      "border": "firebrick 2px solid"
                    }}>FireBrick<br/>#B22222</button>

                    {/* rosy brown button */}
                    <button 
                    onClick={() => setBackgroundColor("rosybrown")}
                    style={{
                      "border": "rosybrown 2px solid"
                    }}>RosyBrown<br/>#BC8F8F</button>

                    {/* medium violet red button */}
                    <button 
                    onClick={() => setBackgroundColor("mediumvioletred")}
                    style={{
                      "border": "mediumvioletred 2px solid"
                    }}>MediumVioletRed<br/>#DB7093</button>

                    {/* indian red button */}
                    <button 
                    onClick={() => setBackgroundColor("indianred")}
                    style={{
                      "border": "indianred 2px solid"
                    }}>IndianRed<br/>#CD5C5C</button>

                    {/* pale violet red button */}
                    <button 
                    onClick={() => setBackgroundColor("palevioletred")}
                    style={{
                      "border": "palevioletred 2px solid"
                    }}>PaleVioletRed<br/>#DB7093</button>

                    {/* crimson button */}
                    <button 
                    onClick={() => setBackgroundColor("crimson")}
                    style={{
                      "border": "crimson 2px solid"
                    }}>Crimson<br/>#DC143C</button>

                </div>
                
                <div className='orange-shades' id='orange-bg'>
                <p>Shades of Orange</p>

                    {/* dark salmon button */}
                    <button 
                    onClick={() => setBackgroundColor("darksalmon")}
                    style={{
                      "border": "darksalmon 2px solid"
                    }}>DarkSalmon<br/>#89967A</button>

                    {/* peru button */}
                    <button 
                    onClick={() => setBackgroundColor("peru")}
                    style={{
                      "border": "peru 2px solid"
                    }}>Peru<br/>#CD853F</button>  

                    {/* chocolate button */}
                    <button 
                    onClick={() => setBackgroundColor("chocolate")}
                    style={{
                      "border": "chocolate 2px solid"
                    }}>Chocolate<br/>#D2691E</button>  

                    {/* light coral button */}
                    <button 
                    onClick={() => setBackgroundColor("lightcoral")}
                    style={{
                      "border": "lightcoral 2px solid"
                    }}>LightCoral<br/>#F08080</button> 

                    {/* sandy brown button */}
                    <button 
                    onClick={() => setBackgroundColor("sandybrown")}
                    style={{
                      "border": "sandybrown 2px solid"
                    }}>SandyBrown<br/>#F4A460</button> 

                    {/* wheat button */}
                    <button 
                    onClick={() => setBackgroundColor("salmon")}
                    style={{
                      "border": "wheat 2px solid"
                    }}>Wheat<br/>#F5DEB3</button> 

                    {/* salmon button */}
                    <button 
                    onClick={() => setBackgroundColor("salmon")}
                    style={{
                      "border": "salmon 2px solid"
                    }}>Salmon<br/>#FA8072</button> 

                    {/* antique white button */}
                    <button 
                    onClick={() => setBackgroundColor("antiquewhite")}
                    style={{
                      "border": "salmon 2px solid"
                    }}>AntiqueWhite<br/>#FAEBD7</button> 

                    {/* orange red button */}
                    <button 
                    onClick={() => setBackgroundColor("orangered")}
                    style={{
                      "border": "orangered 2px solid"
                    }}>OrangeRed<br/>#FF4500</button>

                    {/* tomato button */}
                    <button 
                    onClick={() => setBackgroundColor("tomato")}
                    style={{
                      "border": "tomato 2px solid"
                    }}>Tomato<br/>#FF6347</button>

                    {/* coral button */}
                    <button 
                    onClick={() => setBackgroundColor("coral")}
                    style={{
                      "border": "coral 2px solid"
                    }}>Coral<br/>#FF7F50</button>

                    {/* dark orange button */}
                    <button 
                    onClick={() => setBackgroundColor("darkorange")}
                    style={{
                      "border": "darkorange 2px solid"
                    }}>DarkOrange<br/>#FF8C00</button>

                    {/* light salmon button */}
                    <button 
                    onClick={() => setBackgroundColor("lightsalmon")}
                    style={{
                      "border": "lightsalmon 2px solid"
                    }}>LightSalmon<br/>#FFA07A</button>

                    {/* peach puff button */}
                    <button 
                    onClick={() => setBackgroundColor("peachpuff")}
                    style={{
                      "border": "peachpuff 2px solid"
                    }}>PeachPuff<br/>#FFDAB9</button>

                    {/* navajo white button */}
                    <button 
                    onClick={() => setBackgroundColor("navajowhite")}
                    style={{
                      "border": "navajowhite 2px solid"
                    }}>NavajoWhite<br/>#FFDEAD</button> 

                    {/* moccasin button */}
                    <button 
                    onClick={() => setBackgroundColor("moccasin")}
                    style={{
                      "border": "moccasin 2px solid"
                    }}>Moccasin<br/>#FFE4B5</button>

                    {/* bisque button */}
                    <button 
                    onClick={() => setBackgroundColor("bisque")}
                    style={{
                      "border": "bisque 2px solid"
                    }}>Bisque<br/>#FFE4C4</button>  

                    {/* blanched almond button */}
                    <button 
                    onClick={() => setBackgroundColor("blanchedalmond")}
                    style={{
                      "border": "blanchedalmond 2px solid"
                    }}>BlanchedAlmond<br/>#FFEBCD</button>  

                    {/* papaya whip button */}
                    <button 
                    onClick={() => setBackgroundColor("papayawhip")}
                    style={{
                      "border": "papayawhip 2px solid"
                    }}>PapayaWhip<br/>#FFEFD5</button> 

                </div>
                
                <div className='yellow-shades' id='yellow-bg'>
                  <p>Shades of Yellow</p>

                    {/* dark golden rod button */}
                    <button 
                    onClick={() => setBackgroundColor("darkgoldenrod")}
                    style={{
                      "border": "darkgoldenrod 2px solid"
                    }}>DarkGoldenRod<br/>#B8860B</button> 

                    {/* dark khaki button */}
                    <button 
                    onClick={() => setBackgroundColor("darkkhaki")}
                    style={{
                      "border": "darkkhaki 2px solid"
                    }}>DarkKhaki<br/>#BDB76B</button> 

                    {/* tan button */}
                    <button 
                    onClick={() => setBackgroundColor("tan")}
                    style={{
                      "border": "tan 2px solid"
                    }}>Tan<br/>#D2B48C</button> 

                    {/* golden rod button */}
                    <button 
                    onClick={() => setBackgroundColor("goldenrod")}
                    style={{
                      "border": "goldenrod 2px solid"
                    }}>GoldenRod<br/>#DAA520</button> 

                    {/* burly wood button */}
                    <button 
                    onClick={() => setBackgroundColor("burlywood")}
                    style={{
                      "border": "burlywood 2px solid"
                    }}>BurlyWood<br/>#DEB887</button> 

                    {/* pale golden rod button */}
                    <button 
                    onClick={() => setBackgroundColor("palegoldenrod")}
                    style={{
                      "border": "palegoldenrod 2px solid"
                    }}>PaleGoldenRod<br/>#EEE8AA</button> 

                    {/* khaki button */}
                    <button 
                    onClick={() => setBackgroundColor("khaki")}
                    style={{
                      "border": "khaki 2px solid"
                    }}>Khaki<br/>#F0E68C</button> 

                    {/* beige button */}
                    <button 
                    onClick={() => setBackgroundColor("beige")}
                    style={{
                      "border": "beige 2px solid"
                    }}>Beige<br/>#F5F5DC</button> 

                    {/* linen button */}
                    <button 
                    onClick={() => setBackgroundColor("linen")}
                    style={{
                      "border": "linen 2px solid"
                    }}>Linen<br/>#FAF0E6</button> 

                    {/* light golden rod yellow button */}
                    <button 
                    onClick={() => setBackgroundColor("lightgoldenrodyellow")}
                    style={{
                      "border": "lightgoldenrodyellow 2px solid"
                    }}>LightGoldenRodYellow<br/>#FAFAD2</button>

                    {/* old lace button */}
                    <button 
                    onClick={() => setBackgroundColor("oldlace")}
                    style={{
                      "border": "oldlace 2px solid"
                    }}>OldLace<br/>#FDF5E6</button> 

                    {/* gold button */}
                    <button 
                    onClick={() => setBackgroundColor("gold")}
                    style={{
                      "border": "gold 2px solid"
                    }}>Gold<br/>#FFD700</button>

                    {/* sea shell button */}
                    <button 
                    onClick={() => setBackgroundColor("seashell")}
                    style={{
                      "border": "seashell 2px solid"
                    }}>SeaShell<br/>#FFF5EE</button> 

                    {/* cornsilk button */}
                    <button 
                    onClick={() => setBackgroundColor("cornsilk")}
                    style={{
                      "border": "cornsilk 2px solid"
                    }}>Cornsilk<br/>#FFF8DC</button>

                    {/* lemon chiffon button */}
                    <button 
                    onClick={() => setBackgroundColor("lemonchiffon")}
                    style={{
                      "border": "lemonchiffon 2px solid"
                    }}>LemonChiffon<br/>#FFFACD</button>

                    {/* light yellow button */}
                    <button 
                    onClick={() => setBackgroundColor("lightyellow")}
                    style={{
                      "border": "lightyellow 2px solid"
                    }}>LightYellow<br/>#FFFFE0</button>

                    {/* ivory button */}
                    <button 
                    onClick={() => setBackgroundColor("ivory")}
                    style={{
                      "border": "ivory 2px solid"
                    }}>Ivory<br/>#FFFFF0</button> 

                </div>
                

                <div className='green-shades' id='green-bg'>
                  <p>Shades of Green</p>

                    {/* dark green button */}
                    <button 
                    onClick={() => setBackgroundColor("darkgreen")}
                    style={{
                      "border": "darkgreen 2px solid"
                    }}>DarkGreen<br/>#006400</button>

                    {/* medium spring green button */}
                    <button 
                    onClick={() => setBackgroundColor("mediumspringgreen")}
                    style={{
                      "border": "mediumspringgreen 2px solid"
                    }}>MediumSpringGreen<br/>#00FA9A</button>

                    {/* lime button */}
                    <button 
                    onClick={() => setBackgroundColor("lime")}
                    style={{
                      "border": "lime 2px solid"
                    }}>Lime<br/>#00FF00</button>

                    {/* spring green button */}
                    <button 
                    onClick={() => setBackgroundColor("springgreen")}
                    style={{
                      "border": "springgreen 2px solid"
                    }}>SpringGreen<br/>#00FF7F</button>

                    {/* light sea green button */}
                    <button 
                    onClick={() => setBackgroundColor("lightseagreen")}
                    style={{
                      "border": "lightseagreen 2px solid"
                    }}>LightSeaGreen<br/>#20B2AA</button>

                    {/* forest green button */}
                    <button 
                    onClick={() => setBackgroundColor("forestgreen")}
                    style={{
                      "border": "forestgreen 2px solid"
                    }}>ForestGreen<br/>#228B22</button>
                    
                    {/* sea green button */}
                    <button 
                    onClick={() => setBackgroundColor("seagreen")}
                    style={{
                      "border": "seagreen 2px solid"
                    }}>SeaGreen<br/>#2E8B57</button>

                    {/* lime green button */}
                    <button 
                    onClick={() => setBackgroundColor("limegreen")}
                    style={{
                      "border": "limegreen 2px solid"
                    }}>LimeGreen<br/>#32CD32</button>

                    {/* medium sea green button */}
                    <button 
                    onClick={() => setBackgroundColor("mediumseagreen")}
                    style={{
                      "border": "chartreuse 2px solid"
                    }}>MediumSeagreen<br/>#3CB371</button>

                    {/* turquoise button */}
                    <button 
                    onClick={() => setBackgroundColor("turquoise")}
                    style={{
                      "border": "turquoise 2px solid"
                    }}>Turquoise<br/>#40E0D0</button>

                    {/* turquoise button */}
                    <button 
                    onClick={() => setBackgroundColor("turquoise")}
                    style={{
                      "border": "turquoise 2px solid"
                    }}>Turquoise<br/>#40E0D0</button>

                    {/* dark olive green button */}
                    <button 
                    onClick={() => setBackgroundColor("darkolivegreen")}
                    style={{
                      "border": "darkolivegreen 2px solid"
                    }}>DarkOliveGreen<br/>#556B2F</button>

                    {/* medium aqua marine button */}
                    <button 
                    onClick={() => setBackgroundColor("mediumaquamarine")}
                    style={{
                      "border": "mediumaquamarine 2px solid"
                    }}>mediumAquamarine<br/>#7FFFD4</button>

                    {/* olive drab button */}
                    <button 
                    onClick={() => setBackgroundColor("olivedrab")}
                    style={{
                      "border": "olivedrab 2px solid"
                    }}>OliveDrab<br/>#6B8E23</button>

                    {/* lawn green button */}
                    <button 
                    onClick={() => setBackgroundColor("lawngreen")}
                    style={{
                      "border": "lawngreen 2px solid"
                    }}>LawnGreen<br/>#7CFC00</button>

                    {/* chartreuse button */}
                    <button 
                    onClick={() => setBackgroundColor("chartreuse")}
                    style={{
                      "border": "chartreuse 2px solid"
                    }}>Chartreuse<br/>#7FFF00</button>
                    
                    {/* aqua marine button */}
                    <button 
                    onClick={() => setBackgroundColor("aquamarine")}
                    style={{
                      "border": "aquamarine 2px solid"
                    }}>Aquamarine<br/>#7FFFD4</button> 

                    {/* olive button */}
                    <button 
                    onClick={() => setBackgroundColor("olive")}
                    style={{
                      "border": "olive 2px solid"
                    }}>Olive<br/>#808000</button>

                    {/* dark sea green button */}
                    <button 
                    onClick={() => setBackgroundColor("darkseagreen")}
                    style={{
                      "border": "darkseagreen 2px solid"
                    }}>DarkSeaGreen<br/>#8FBC8F</button>

                    {/* light green button */}
                    <button 
                    onClick={() => setBackgroundColor("lightgreen")}
                    style={{
                      "border": "lightgreen 2px solid"
                    }}>LightGreen<br/>#90EE90</button>

                    {/* pale green button */}
                    <button 
                    onClick={() => setBackgroundColor("palegreen")}
                    style={{
                      "border": "palegreen 2px solid"
                    }}>PaleGreen<br/>#98FB98</button>

                    {/* yellow green button */}
                    <button 
                    onClick={() => setBackgroundColor("yellowgreen")}
                    style={{
                      "border": "yellowgreen 2px solid"
                    }}>YellowGreen<br/>#9ACD32</button>

                    {/* green yellow button */}
                    <button 
                    onClick={() => setBackgroundColor("greenyellow")}
                    style={{
                      "border": "greenyellow 2px solid"
                    }}>GreenYellow<br/>#ADFF2F</button>

                    {/* honey dew button */}
                    <button  
                    onClick={() => setBackgroundColor("honeydew")}
                    style={{
                      "border": "honeydew 2px solid"
                    }}>HoneyDew<br/>#F0FFF0</button>

                    {/* mint cream button */}
                    <button 
                    onClick={() => setBackgroundColor("mintcream")}
                    style={{
                      "border": "mintcream 2px solid"
                    }}>MintCream<br/>#F5FFFA</button>

                </div>

                <div className='green-blue-shades' id='g&b-bg'>
                  <p>Green & Blue Combo</p>

                    {/* teal button */}
                    <button 
                    onClick={() => setBackgroundColor("teal")}
                    style={{
                      "border": "teal 2px solid"
                    }}>Teal<br/>#008080</button>

                    {/* dark cyan button */}
                    <button 
                    onClick={() => setBackgroundColor("darkcyan")}
                    style={{
                      "border": "darkcyan 2px solid"
                    }}>DarkCyan<br/>#008B8B</button>

                    {/* aqua/cyan button */}
                    <button 
                    onClick={() => setBackgroundColor("aqua")}
                    style={{
                      "border": "aqua 2px solid"
                    }}>Aqua/Cyan<br/>#00FFFF</button>

                    {/* pale turquoise button */}
                    <button 
                    onClick={() => setBackgroundColor("paleturquoise")}
                    style={{
                      "border": "paleturquoise 2px solid"
                    }}>PaleTurquoise<br/>#AFEEEE</button>

                    {/* light cyan button */}
                    <button 
                    onClick={() => setBackgroundColor("lightcyan")}
                    style={{
                      "border": "lightcyan 2px solid"
                    }}>LightCyan<br/>#E0FFFF</button>

                    {/* azure button */}
                    <button 
                    onClick={() => setBackgroundColor("azure")}
                    style={{
                      "border": "azure 2px solid"
                    }}>Azure<br/>#F0FFFF</button>

                </div>

                <div className='blue-shades' id='blue-bg'>
                  <p>Shades of Blue</p>

                    {/* navy button */}
                    <button 
                    onClick={() => setBackgroundColor("navy")}
                    style={{
                      "border": "navy 2px solid"
                    }}>Navy<br/>#000080</button> 

                    {/* dark blue button */}
                    <button 
                    onClick={() => setBackgroundColor("darkblue")}
                    style={{
                      "border": "darkblue 2px solid"
                    }}>DarkBlue<br/>#00008B</button>

                    {/* medium blue button */}
                    <button 
                    onClick={() => setBackgroundColor("mediumblue")}
                    style={{
                      "border": "mediumblue 2px solid"
                    }}>MediumBlue<br/>#0000CD</button>

                    {/* deep sky blue button */}
                    <button 
                    onClick={() => setBackgroundColor("deepskyblue")}
                    style={{
                      "border": "deepskyblue 2px solid"
                    }}>DeepSkyBlue<br/>#00BFFF</button>

                    {/* dark turquoise button */}
                    <button 
                    onClick={() => setBackgroundColor("darkturquoise")}
                    style={{
                      "border": "darkturquoise 2px solid"
                    }}>DarkTurquoise<br/>#00CED1</button>

                    {/* midnight blue button */}
                    <button 
                    onClick={() => setBackgroundColor("midnightblue")}
                    style={{
                      "border": "midnightblue 2px solid"
                    }}>MidnightBlue<br/>#191970</button>

                    {/* dodger blue button */}
                    <button 
                    onClick={() => setBackgroundColor("dodgerblue")}
                    style={{
                      "border": "dodgerblue 2px solid"
                    }}>DodgerBlue<br/>#1E90FF</button>

                    {/* royal blue button */}
                    <button 
                    onClick={() => setBackgroundColor("royalblue")}
                    style={{
                      "border": "royalblue 2px solid"
                    }}>RoyalBlue<br/>#4169E1</button>

                    {/* steel blue button */}
                    <button 
                    onClick={() => setBackgroundColor("steelblue")}
                    style={{
                      "border": "steelblue 2px solid"
                    }}>SteelBlue<br/>#4682B4</button> 

                    {/* dark slate blue button */}
                    <button 
                    onClick={() => setBackgroundColor("darkslateblue")}
                    style={{
                      "border": "darkslateblue 2px solid"
                    }}>DarkSlateBlue<br/>#483D8B</button>

                    {/* cadet blue button */}
                    <button 
                    onClick={() => setBackgroundColor("cadetblue")}
                    style={{
                      "border": "cadetblue 2px solid"
                    }}>CadetBlue<br/>#5F9EA0</button>

                    {/* cornflower blue button */}
                    <button 
                    onClick={() => setBackgroundColor("cornflowerblue")}
                    style={{
                      "border": "cornflowerblue 2px solid"
                    }}>CornflowerBlue<br/>#6495ED</button>

                    {/* slate blue button */}
                    <button 
                    onClick={() => setBackgroundColor("slateblue")}
                    style={{
                      "border": "slateblue 2px solid"
                    }}>SlateBlue<br/>#6A5ACD</button>

                    {/* medium slate blue button */}
                    <button 
                    onClick={() => setBackgroundColor("mediumslateblue")}
                    style={{
                      "border": "mediumslateblue 2px solid"
                    }}>MediumSlateBlue<br/>#7B68EE</button>

                    {/* sky blue button */}
                    <button 
                    onClick={() => setBackgroundColor("skyblue")}
                    style={{
                      "border": "teal 2px solid"
                    }}>SkyBlue<br/>#87CEEB</button>

                    {/* light sky blue button */}
                    <button 
                    onClick={() => setBackgroundColor("lightskyblue")}
                    style={{
                      "border": "lightskyblue 2px solid"
                    }}>LightSkyBlue<br/>#87CEFA</button>

                    {/* light blue button */}
                    <button 
                    onClick={() => setBackgroundColor("lightblue")}
                    style={{
                      "border": "lightblue 2px solid"
                    }}>LightBlue<br/>#ADD8E6</button>

                    {/* light steel blue button */}
                    <button 
                    onClick={() => setBackgroundColor("lightsteelblue")}
                    style={{
                      "border": "lightsteelblue 2px solid"
                    }}>LightSteelBlue<br/>#B0C4DE</button>

                    {/* powder blue button */}
                    <button 
                    onClick={() => setBackgroundColor("powderblue")}
                    style={{
                      "border": "powderblue 2px solid"
                    }}>PowderBlue<br/>#B0E0E6</button>

                    {/* alice blue button */}
                    <button 
                    onClick={() => setBackgroundColor("aliceblue")}
                    style={{
                      "border": "aliceblue 2px solid"
                    }}>AliceBlue<br/>#F0F8FF</button>

                </div>

                <div className='purple-shades' id='purple-bg'>
                  <p>Shades of Purple</p>

                    {/* indigo button */}
                    <button 
                    onClick={() => setBackgroundColor("indigo")}
                    style={{
                      "border": "indigo 2px solid"
                    }}>Indigo<br/>#4B0082</button> 

                    {/* rebecca purple button */}
                    <button 
                    onClick={() => setBackgroundColor("rebeccapurple")}
                    style={{
                      "border": "rebeccapurple 2px solid"
                    }}>RebeccaPurple<br/>#663399</button>

                    {/* blue violet button */}
                    <button 
                    onClick={() => setBackgroundColor("blueviolet")}
                    style={{
                      "border": "blueviolet 2px solid"
                    }}>BlueViolet<br/>#8A2BE2</button>

                    {/* darkmagenta button */}
                    <button 
                    onClick={() => setBackgroundColor("darkmagenta")}
                    style={{
                      "border": "darkmagenta 2px solid"
                    }}>DarkMagenta<br/>#8B008B</button>

                    {/* medium purple button */}
                    <button 
                    onClick={() => setBackgroundColor("mediumpurple")}
                    style={{
                      "border": "mediumpurple 2px solid"
                    }}>MediumPurple<br/>#9370DB</button>

                    {/* darkviolet button */}
                    <button 
                    onClick={() => setBackgroundColor("darkviolet")}
                    style={{
                      "border": "darkviolet 2px solid"
                    }}>DarkViolet<br/>#9400D3</button>
                    
                    {/* darkorchid button */}
                    <button 
                    onClick={() => setBackgroundColor("darkorchid")}
                    style={{
                      "border": "darkorchid 2px solid"
                    }}>DarkOrchid<br/>#9932CC</button>

                    {/* medium orchid button */}
                    <button 
                    onClick={() => setBackgroundColor("mediumorchid")}
                    style={{
                      "border": "mediumorchid 2px solid"
                    }}>MediumOrchid<br/>#BA55D3</button>

                    {/* thistle button */}
                    <button 
                    onClick={() => setBackgroundColor("thistle")}
                    style={{
                      "border": "thistle 2px solid"
                    }}>Thistle<br/>#D8BFD8</button> 

                    {/* orchid button */}
                    <button 
                    onClick={() => setBackgroundColor("orchid")}
                    style={{
                      "border": "orchid 2px solid"
                    }}>Orchid<br/>#DA70D6</button>

                    {/* plum button */}
                    <button 
                    onClick={() => setBackgroundColor("plum")}
                    style={{
                      "border": "plum 2px solid"
                    }}>Plum<br/>#DDA0DD</button>

                    {/* lavender button */}
                    <button 
                    onClick={() => setBackgroundColor("lavender")}
                    style={{
                      "border": "lavender 2px solid"
                    }}>Lavender<br/>#E6E6FA</button>

                    {/* violet button */}
                    <button 
                    onClick={() => setBackgroundColor("violet")}
                    style={{
                      "border": "violet 2px solid"
                    }}>Violet<br/>#EE82EE</button>

                    {/* ghost white button */}
                    <button 
                    onClick={() => setBackgroundColor("ghostwhite")}
                    style={{
                      "border": "ghostwhite 2px solid"
                    }}>GhostWhite<br/>#F8F8FF</button>

                    {/* fuchsia/magenta button */}
                    <button 
                    onClick={() => setBackgroundColor("fuchsia")}
                    style={{
                      "border": "fuchsia 2px solid"
                    }}>Fuchsia/Magenta<br/>#FF00FF</button>

                    {/* deep pink button */}
                    <button 
                    onClick={() => setBackgroundColor("deeppink")}
                    style={{
                      "border": "deeppink 2px solid"
                    }}>DeepPink<br/>#FF1493</button>

                    {/* light pink button */}
                    <button 
                    onClick={() => setBackgroundColor("lightpink")}
                    style={{
                      "border": "lightpink 2px solid"
                    }}>LightPink<br/>#FFB6C1</button>

                    {/* pink button */}
                    <button 
                    onClick={() => setBackgroundColor("pink")}
                    style={{
                      "border": "pink 2px solid"
                    }}>Pink<br/>#FFC0CB</button>

                    {/* misty rose button */}
                    <button 
                    onClick={() => setBackgroundColor("mistyrose")}
                    style={{
                      "border": "mistyrose 2px solid"
                    }}>MistyRose<br/>#FFE4E1</button>

                    {/* lavender blush button */}
                    <button 
                    onClick={() => setBackgroundColor("lavenderblush")}
                    style={{
                      "border": "lavenderblush 2px solid"
                    }}>LavenderBlush<br/>#FFF0F5</button>

                    {/* snow button */}
                    <button 
                    onClick={() => setBackgroundColor("snow")}
                    style={{
                      "border": "snow 2px solid"
                    }}>Snow<br/>#FFFAFA</button>

                </div>

            </div>
            
            <div className='font'>
                <div className='six-tertiary' id='six-color'>
                  <p>Six Tertiary</p>

                    {/* red button */}
                    <button 
                    onClick={() => setColor("red")}
                    style={{
                      "border": "red 3px solid"
                    }}>Red<br/>#FF0000</button>

                    {/* orange button */}
                    <button 
                    onClick={() => setColor("orange")}
                    style={{
                      "border": "orange 3px solid"
                    }}>Orange<br/>#FFA500</button>

                    {/* yellow button */}
                    <button 
                    onClick={() => setColor("yellow")}
                    style={{
                      "border": "yellow 3px solid"
                    }}>Yellow<br/>#FFFF00</button>

                    {/* green button */}
                    <button 
                    onClick={() => setColor("green")}
                    style={{
                      "border": "green 3px solid"
                    }}>Green<br/>#008000</button>

                    {/* blue button */}
                    <button 
                    onClick={() => setColor("blue")}
                    style={{
                      "border": "blue 3px solid"
                    }}>Blue<br/>#0000FF</button>

                    {/* purple button */}
                    <button 
                    onClick={() => setColor("purple")}
                    style={{
                      "border": "purple 3px solid"
                    }}>Purple<br/>#800080</button>

                </div>

                <div className='monochrome' id='monochrome-color'>
                  <p>Monochrome</p>

                  
                    {/* black button */}
                    <button 
                    onClick={() => setColor("black")}
                    style={{
                      "border": "black 2px solid"
                    }}>Black<br/>#000000</button>

                    
                    {/* dark slate gray button */}
                    <button 
                    onClick={() => setColor("darkslategray")}
                    style={{
                      "border": "darkslategray 2px solid"
                    }}>DarkSlateGray<br/>#2F4F4F</button>

                    
                    {/* dim gray button */}
                    <button 
                    onClick={() => setColor("dimgray")}
                    style={{
                      "border": "dimgray 2px solid"
                    }}>DimGray<br/>#696969</button>

                    
                    {/* slate gray button */}
                    <button 
                    onClick={() => setColor("slategray")}
                    style={{
                      "border": "slategray 2px solid"
                    }}>SlateGray<br/>#708090</button>

                    
                    {/* light slate gray button */}
                    <button 
                    onClick={() => setColor("lightslategray")}
                    style={{
                      "border": "lightslategray 2px solid"
                    }}>LightSlateGray<br/>#778899</button>

                    
                    {/* gray button */}
                    <button 
                    onClick={() => setColor("gray")}
                    style={{
                      "border": "gray 2px solid"
                    }}>Gray<br/>#808080</button>

                    
                    {/* dark gray button */}
                    <button 
                    onClick={() => setColor("darkgray")}
                    style={{
                      "border": "darkgray 2px solid"
                    }}>DarkGray<br/>#A9A9A9</button>

                    
                    {/* silver button */}
                    <button 
                    onClick={() => setColor("silver")}
                    style={{
                      "border": "silver 2px solid"
                    }}>Silver<br/>#C0C0C0</button>

                    
                    {/* light gray button */}
                    <button 
                    onClick={() => setColor("lightgray")}
                    style={{
                      "border": "lightgray 2px solid"
                    }}>LightGray<br/>#D3D3D3</button>

                    {/* gainsboro button */}
                    <button 
                    onClick={() => setColor("gainsboro")}
                    style={{
                      "border": "gainsboro 2px solid"
                    }}>Gainsboro<br/>#DCDCDC</button>

                    {/* white smoke button */}
                    <button 
                    onClick={() => setColor("whitesmoke")}
                    style={{
                      "border": "whitesmoke 2px solid"
                    }}>WhiteSmoke<br/>#F5F5F5</button>

                    {/* white button */}
                    <button 
                    onClick={() => setColor("white")}
                    style={{
                      "border": "white 2px solid"
                    }}>White<br/>#FFFFFF</button>

                </div>
                
                <div className='red-shades' id='red-color'>
                <p>Shades of Red</p>

                    {/* maroon button */}
                    <button 
                    onClick={() => setColor("maroon")}
                    style={{
                      "border": "maroon 2px solid"
                    }}>Maroon<br/>#800000</button>

                    {/* dark red button */}
                    <button 
                    onClick={() => setColor("darkred")}
                    style={{
                      "border": "darkred 2px solid"
                    }}>DarkRed<br/>#8B0000</button>

                    {/* saddle brown button */}
                    <button 
                    onClick={() => setColor("saddlebrown")}
                    style={{
                      "border": "saddlebrown 2px solid"
                    }}>SaddleBrown<br/>#8B0000</button>

                    {/* sienna button */}
                    <button 
                    onClick={() => setColor("sienna")}
                    style={{
                      "border": "sienna 2px solid"
                    }}>Sienna<br/>#A0522D</button>

                    {/* brown button */}
                    <button 
                    onClick={() => setColor("brown")}
                    style={{
                      "border": "brown 2px solid"
                    }}>Brown<br/>#FA8072</button>

                    {/* fire brick button */}
                    <button 
                    onClick={() => setColor("firebrick")}
                    style={{
                      "border": "firebrick 2px solid"
                    }}>FireBrick<br/>#B22222</button>

                    {/* rosy brown button */}
                    <button 
                    onClick={() => setColor("rosybrown")}
                    style={{
                      "border": "rosybrown 2px solid"
                    }}>RosyBrown<br/>#BC8F8F</button>

                    {/* medium violet red button */}
                    <button 
                    onClick={() => setColor("mediumvioletred")}
                    style={{
                      "border": "mediumvioletred 2px solid"
                    }}>MediumVioletRed<br/>#DB7093</button>

                    {/* indian red button */}
                    <button 
                    onClick={() => setColor("indianred")}
                    style={{
                      "border": "indianred 2px solid"
                    }}>IndianRed<br/>#CD5C5C</button>

                    {/* pale violet red button */}
                    <button 
                    onClick={() => setColor("palevioletred")}
                    style={{
                      "border": "palevioletred 2px solid"
                    }}>PaleVioletRed<br/>#DB7093</button>

                    {/* crimson button */}
                    <button 
                    onClick={() => setColor("crimson")}
                    style={{
                      "border": "crimson 2px solid"
                    }}>Crimson<br/>#DC143C</button>

                </div>
                
                <div className='orange-shades' id='orange-color'>
                <p>Shades of Orange</p>

                    {/* dark salmon button */}
                    <button 
                    onClick={() => setColor("darksalmon")}
                    style={{
                      "border": "darksalmon 2px solid"
                    }}>DarkSalmon<br/>#89967A</button>

                    {/* peru button */}
                    <button 
                    onClick={() => setColor("peru")}
                    style={{
                      "border": "peru 2px solid"
                    }}>Peru<br/>#CD853F</button>  

                    {/* chocolate button */}
                    <button 
                    onClick={() => setColor("chocolate")}
                    style={{
                      "border": "chocolate 2px solid"
                    }}>Chocolate<br/>#D2691E</button>  

                    {/* light coral button */}
                    <button 
                    onClick={() => setColor("lightcoral")}
                    style={{
                      "border": "lightcoral 2px solid"
                    }}>LightCoral<br/>#F08080</button> 

                    {/* sandy brown button */}
                    <button 
                    onClick={() => setColor("sandybrown")}
                    style={{
                      "border": "sandybrown 2px solid"
                    }}>SandyBrown<br/>#F4A460</button> 

                    {/* wheat button */}
                    <button 
                    onClick={() => setColor("salmon")}
                    style={{
                      "border": "wheat 2px solid"
                    }}>Wheat<br/>#F5DEB3</button> 

                    {/* salmon button */}
                    <button 
                    onClick={() => setColor("salmon")}
                    style={{
                      "border": "salmon 2px solid"
                    }}>Salmon<br/>#FA8072</button> 

                    {/* antique white button */}
                    <button 
                    onClick={() => setColor("antiquewhite")}
                    style={{
                      "border": "salmon 2px solid"
                    }}>AntiqueWhite<br/>#FAEBD7</button> 

                    {/* orange red button */}
                    <button 
                    onClick={() => setColor("orangered")}
                    style={{
                      "border": "orangered 2px solid"
                    }}>OrangeRed<br/>#FF4500</button>

                    {/* tomato button */}
                    <button 
                    onClick={() => setColor("tomato")}
                    style={{
                      "border": "tomato 2px solid"
                    }}>Tomato<br/>#FF6347</button>

                    {/* coral button */}
                    <button 
                    onClick={() => setColor("coral")}
                    style={{
                      "border": "coral 2px solid"
                    }}>Coral<br/>#FF7F50</button>

                    {/* dark orange button */}
                    <button 
                    onClick={() => setColor("darkorange")}
                    style={{
                      "border": "darkorange 2px solid"
                    }}>DarkOrange<br/>#FF8C00</button>

                    {/* light salmon button */}
                    <button 
                    onClick={() => setColor("lightsalmon")}
                    style={{
                      "border": "lightsalmon 2px solid"
                    }}>LightSalmon<br/>#FFA07A</button>

                    {/* peach puff button */}
                    <button 
                    onClick={() => setColor("peachpuff")}
                    style={{
                      "border": "peachpuff 2px solid"
                    }}>PeachPuff<br/>#FFDAB9</button>

                    {/* navajo white button */}
                    <button 
                    onClick={() => setColor("navajowhite")}
                    style={{
                      "border": "navajowhite 2px solid"
                    }}>NavajoWhite<br/>#FFDEAD</button> 

                    {/* moccasin button */}
                    <button 
                    onClick={() => setColor("moccasin")}
                    style={{
                      "border": "moccasin 2px solid"
                    }}>Moccasin<br/>#FFE4B5</button>

                    {/* bisque button */}
                    <button 
                    onClick={() => setColor("bisque")}
                    style={{
                      "border": "bisque 2px solid"
                    }}>Bisque<br/>#FFE4C4</button>  

                    {/* blanched almond button */}
                    <button 
                    onClick={() => setColor("blanchedalmond")}
                    style={{
                      "border": "blanchedalmond 2px solid"
                    }}>BlanchedAlmond<br/>#FFEBCD</button>  

                    {/* papaya whip button */}
                    <button 
                    onClick={() => setColor("papayawhip")}
                    style={{
                      "border": "papayawhip 2px solid"
                    }}>PapayaWhip<br/>#FFEFD5</button> 

                </div>
                
                <div className='yellow-shades' id='yellow-color'>
                  <p>Shades of Yellow</p>

                    {/* dark golden rod button */}
                    <button 
                    onClick={() => setColor("darkgoldenrod")}
                    style={{
                      "border": "darkgoldenrod 2px solid"
                    }}>DarkGoldenRod<br/>#B8860B</button> 

                    {/* dark khaki button */}
                    <button 
                    onClick={() => setColor("darkkhaki")}
                    style={{
                      "border": "darkkhaki 2px solid"
                    }}>DarkKhaki<br/>#BDB76B</button> 

                    {/* tan button */}
                    <button 
                    onClick={() => setColor("tan")}
                    style={{
                      "border": "tan 2px solid"
                    }}>Tan<br/>#D2B48C</button> 

                    {/* golden rod button */}
                    <button 
                    onClick={() => setColor("goldenrod")}
                    style={{
                      "border": "goldenrod 2px solid"
                    }}>GoldenRod<br/>#DAA520</button> 

                    {/* burly wood button */}
                    <button 
                    onClick={() => setColor("burlywood")}
                    style={{
                      "border": "burlywood 2px solid"
                    }}>BurlyWood<br/>#DEB887</button> 

                    {/* pale golden rod button */}
                    <button 
                    onClick={() => setColor("palegoldenrod")}
                    style={{
                      "border": "palegoldenrod 2px solid"
                    }}>PaleGoldenRod<br/>#EEE8AA</button> 

                    {/* khaki button */}
                    <button 
                    onClick={() => setColor("khaki")}
                    style={{
                      "border": "khaki 2px solid"
                    }}>Khaki<br/>#F0E68C</button> 

                    {/* beige button */}
                    <button 
                    onClick={() => setColor("beige")}
                    style={{
                      "border": "beige 2px solid"
                    }}>Beige<br/>#F5F5DC</button> 

                    {/* linen button */}
                    <button 
                    onClick={() => setColor("linen")}
                    style={{
                      "border": "linen 2px solid"
                    }}>Linen<br/>#FAF0E6</button> 

                    {/* light golden rod yellow button */}
                    <button 
                    onClick={() => setColor("lightgoldenrodyellow")}
                    style={{
                      "border": "lightgoldenrodyellow 2px solid"
                    }}>LightGoldenRodYellow<br/>#FAFAD2</button>

                    {/* old lace button */}
                    <button 
                    onClick={() => setColor("oldlace")}
                    style={{
                      "border": "oldlace 2px solid"
                    }}>OldLace<br/>#FDF5E6</button> 

                    {/* gold button */}
                    <button 
                    onClick={() => setColor("gold")}
                    style={{
                      "border": "gold 2px solid"
                    }}>Gold<br/>#FFD700</button>

                    {/* sea shell button */}
                    <button 
                    onClick={() => setColor("seashell")}
                    style={{
                      "border": "seashell 2px solid"
                    }}>SeaShell<br/>#FFF5EE</button> 

                    {/* cornsilk button */}
                    <button 
                    onClick={() => setColor("cornsilk")}
                    style={{
                      "border": "cornsilk 2px solid"
                    }}>Cornsilk<br/>#FFF8DC</button>

                    {/* lemon chiffon button */}
                    <button 
                    onClick={() => setColor("lemonchiffon")}
                    style={{
                      "border": "lemonchiffon 2px solid"
                    }}>LemonChiffon<br/>#FFFACD</button>

                    {/* light yellow button */}
                    <button 
                    onClick={() => setColor("lightyellow")}
                    style={{
                      "border": "lightyellow 2px solid"
                    }}>LightYellow<br/>#FFFFE0</button>

                    {/* ivory button */}
                    <button 
                    onClick={() => setColor("ivory")}
                    style={{
                      "border": "ivory 2px solid"
                    }}>Ivory<br/>#FFFFF0</button> 

                </div>
                

                <div className='green-shades' id='green-color'>
                  <p>Shades of Green</p>

                    {/* dark green button */}
                    <button 
                    onClick={() => setColor("darkgreen")}
                    style={{
                      "border": "darkgreen 2px solid"
                    }}>DarkGreen<br/>#006400</button>

                    {/* medium spring green button */}
                    <button 
                    onClick={() => setColor("mediumspringgreen")}
                    style={{
                      "border": "mediumspringgreen 2px solid"
                    }}>MediumSpringGreen<br/>#00FA9A</button>

                    {/* lime button */}
                    <button 
                    onClick={() => setColor("lime")}
                    style={{
                      "border": "lime 2px solid"
                    }}>Lime<br/>#00FF00</button>

                    {/* spring green button */}
                    <button 
                    onClick={() => setColor("springgreen")}
                    style={{
                      "border": "springgreen 2px solid"
                    }}>SpringGreen<br/>#00FF7F</button>

                    {/* light sea green button */}
                    <button 
                    onClick={() => setColor("lightseagreen")}
                    style={{
                      "border": "lightseagreen 2px solid"
                    }}>LightSeaGreen<br/>#20B2AA</button>

                    {/* forest green button */}
                    <button 
                    onClick={() => setColor("forestgreen")}
                    style={{
                      "border": "forestgreen 2px solid"
                    }}>ForestGreen<br/>#228B22</button>
                    
                    {/* sea green button */}
                    <button 
                    onClick={() => setColor("seagreen")}
                    style={{
                      "border": "seagreen 2px solid"
                    }}>SeaGreen<br/>#2E8B57</button>

                    {/* lime green button */}
                    <button 
                    onClick={() => setColor("limegreen")}
                    style={{
                      "border": "limegreen 2px solid"
                    }}>LimeGreen<br/>#32CD32</button>

                    {/* medium sea green button */}
                    <button 
                    onClick={() => setColor("mediumseagreen")}
                    style={{
                      "border": "chartreuse 2px solid"
                    }}>MediumSeagreen<br/>#3CB371</button>

                    {/* turquoise button */}
                    <button 
                    onClick={() => setColor("turquoise")}
                    style={{
                      "border": "turquoise 2px solid"
                    }}>Turquoise<br/>#40E0D0</button>

                    {/* turquoise button */}
                    <button 
                    onClick={() => setColor("turquoise")}
                    style={{
                      "border": "turquoise 2px solid"
                    }}>Turquoise<br/>#40E0D0</button>

                    {/* dark olive green button */}
                    <button 
                    onClick={() => setColor("darkolivegreen")}
                    style={{
                      "border": "darkolivegreen 2px solid"
                    }}>DarkOliveGreen<br/>#556B2F</button>

                    {/* medium aqua marine button */}
                    <button 
                    onClick={() => setColor("mediumaquamarine")}
                    style={{
                      "border": "mediumaquamarine 2px solid"
                    }}>mediumAquamarine<br/>#7FFFD4</button>

                    {/* olive drab button */}
                    <button 
                    onClick={() => setColor("olivedrab")}
                    style={{
                      "border": "olivedrab 2px solid"
                    }}>OliveDrab<br/>#6B8E23</button>

                    {/* lawn green button */}
                    <button 
                    onClick={() => setColor("lawngreen")}
                    style={{
                      "border": "lawngreen 2px solid"
                    }}>LawnGreen<br/>#7CFC00</button>

                    {/* chartreuse button */}
                    <button 
                    onClick={() => setColor("chartreuse")}
                    style={{
                      "border": "chartreuse 2px solid"
                    }}>Chartreuse<br/>#7FFF00</button>
                    
                    {/* aqua marine button */}
                    <button 
                    onClick={() => setColor("aquamarine")}
                    style={{
                      "border": "aquamarine 2px solid"
                    }}>Aquamarine<br/>#7FFFD4</button> 

                    {/* olive button */}
                    <button 
                    onClick={() => setColor("olive")}
                    style={{
                      "border": "olive 2px solid"
                    }}>Olive<br/>#808000</button>

                    {/* dark sea green button */}
                    <button 
                    onClick={() => setColor("darkseagreen")}
                    style={{
                      "border": "darkseagreen 2px solid"
                    }}>DarkSeaGreen<br/>#8FBC8F</button>

                    {/* light green button */}
                    <button 
                    onClick={() => setColor("lightgreen")}
                    style={{
                      "border": "lightgreen 2px solid"
                    }}>LightGreen<br/>#90EE90</button>

                    {/* pale green button */}
                    <button 
                    onClick={() => setColor("palegreen")}
                    style={{
                      "border": "palegreen 2px solid"
                    }}>PaleGreen<br/>#98FB98</button>

                    {/* yellow green button */}
                    <button 
                    onClick={() => setColor("yellowgreen")}
                    style={{
                      "border": "yellowgreen 2px solid"
                    }}>YellowGreen<br/>#9ACD32</button>

                    {/* green yellow button */}
                    <button 
                    onClick={() => setColor("greenyellow")}
                    style={{
                      "border": "greenyellow 2px solid"
                    }}>GreenYellow<br/>#ADFF2F</button>

                    {/* honey dew button */}
                    <button  
                    onClick={() => setColor("honeydew")}
                    style={{
                      "border": "honeydew 2px solid"
                    }}>HoneyDew<br/>#F0FFF0</button>

                    {/* mint cream button */}
                    <button 
                    onClick={() => setColor("mintcream")}
                    style={{
                      "border": "mintcream 2px solid"
                    }}>MintCream<br/>#F5FFFA</button>

                </div>

                <div className='green-blue-shades' id='g&b-color'>
                  <p>Green & Blue Combo</p>

                    {/* teal button */}
                    <button 
                    onClick={() => setColor("teal")}
                    style={{
                      "border": "teal 2px solid"
                    }}>Teal<br/>#008080</button>

                    {/* dark cyan button */}
                    <button 
                    onClick={() => setColor("darkcyan")}
                    style={{
                      "border": "darkcyan 2px solid"
                    }}>DarkCyan<br/>#008B8B</button>

                    {/* aqua/cyan button */}
                    <button 
                    onClick={() => setColor("aqua")}
                    style={{
                      "border": "aqua 2px solid"
                    }}>Aqua/Cyan<br/>#00FFFF</button>

                    {/* pale turquoise button */}
                    <button 
                    onClick={() => setColor("paleturquoise")}
                    style={{
                      "border": "paleturquoise 2px solid"
                    }}>PaleTurquoise<br/>#AFEEEE</button>

                    {/* light cyan button */}
                    <button 
                    onClick={() => setColor("lightcyan")}
                    style={{
                      "border": "lightcyan 2px solid"
                    }}>LightCyan<br/>#E0FFFF</button>

                    {/* azure button */}
                    <button 
                    onClick={() => setColor("azure")}
                    style={{
                      "border": "azure 2px solid"
                    }}>Azure<br/>#F0FFFF</button>

                </div>

                <div className='blue-shades' id='blue-color'>
                  <p>Shades of Blue</p>

                    {/* navy button */}
                    <button 
                    onClick={() => setColor("navy")}
                    style={{
                      "border": "navy 2px solid"
                    }}>Navy<br/>#000080</button> 

                    {/* dark blue button */}
                    <button 
                    onClick={() => setColor("darkblue")}
                    style={{
                      "border": "darkblue 2px solid"
                    }}>DarkBlue<br/>#00008B</button>

                    {/* medium blue button */}
                    <button 
                    onClick={() => setColor("mediumblue")}
                    style={{
                      "border": "mediumblue 2px solid"
                    }}>MediumBlue<br/>#0000CD</button>

                    {/* deep sky blue button */}
                    <button 
                    onClick={() => setColor("deepskyblue")}
                    style={{
                      "border": "deepskyblue 2px solid"
                    }}>DeepSkyBlue<br/>#00BFFF</button>

                    {/* dark turquoise button */}
                    <button 
                    onClick={() => setColor("darkturquoise")}
                    style={{
                      "border": "darkturquoise 2px solid"
                    }}>DarkTurquoise<br/>#00CED1</button>

                    {/* midnight blue button */}
                    <button 
                    onClick={() => setColor("midnightblue")}
                    style={{
                      "border": "midnightblue 2px solid"
                    }}>MidnightBlue<br/>#191970</button>

                    {/* dodger blue button */}
                    <button 
                    onClick={() => setColor("dodgerblue")}
                    style={{
                      "border": "dodgerblue 2px solid"
                    }}>DodgerBlue<br/>#1E90FF</button>

                    {/* royal blue button */}
                    <button 
                    onClick={() => setColor("royalblue")}
                    style={{
                      "border": "royalblue 2px solid"
                    }}>RoyalBlue<br/>#4169E1</button>

                    {/* steel blue button */}
                    <button 
                    onClick={() => setColor("steelblue")}
                    style={{
                      "border": "steelblue 2px solid"
                    }}>SteelBlue<br/>#4682B4</button> 

                    {/* dark slate blue button */}
                    <button 
                    onClick={() => setColor("darkslateblue")}
                    style={{
                      "border": "darkslateblue 2px solid"
                    }}>DarkSlateBlue<br/>#483D8B</button>

                    {/* cadet blue button */}
                    <button 
                    onClick={() => setColor("cadetblue")}
                    style={{
                      "border": "cadetblue 2px solid"
                    }}>CadetBlue<br/>#5F9EA0</button>

                    {/* cornflower blue button */}
                    <button 
                    onClick={() => setColor("cornflowerblue")}
                    style={{
                      "border": "cornflowerblue 2px solid"
                    }}>CornflowerBlue<br/>#6495ED</button>

                    {/* slate blue button */}
                    <button 
                    onClick={() => setColor("slateblue")}
                    style={{
                      "border": "slateblue 2px solid"
                    }}>SlateBlue<br/>#6A5ACD</button>

                    {/* medium slate blue button */}
                    <button 
                    onClick={() => setColor("mediumslateblue")}
                    style={{
                      "border": "mediumslateblue 2px solid"
                    }}>MediumSlateBlue<br/>#7B68EE</button>

                    {/* sky blue button */}
                    <button 
                    onClick={() => setColor("skyblue")}
                    style={{
                      "border": "teal 2px solid"
                    }}>SkyBlue<br/>#87CEEB</button>

                    {/* light sky blue button */}
                    <button 
                    onClick={() => setColor("lightskyblue")}
                    style={{
                      "border": "lightskyblue 2px solid"
                    }}>LightSkyBlue<br/>#87CEFA</button>

                    {/* light blue button */}
                    <button 
                    onClick={() => setColor("lightblue")}
                    style={{
                      "border": "lightblue 2px solid"
                    }}>LightBlue<br/>#ADD8E6</button>

                    {/* light steel blue button */}
                    <button 
                    onClick={() => setColor("lightsteelblue")}
                    style={{
                      "border": "lightsteelblue 2px solid"
                    }}>LightSteelBlue<br/>#B0C4DE</button>

                    {/* powder blue button */}
                    <button 
                    onClick={() => setColor("powderblue")}
                    style={{
                      "border": "powderblue 2px solid"
                    }}>PowderBlue<br/>#B0E0E6</button>

                    {/* alice blue button */}
                    <button 
                    onClick={() => setColor("aliceblue")}
                    style={{
                      "border": "aliceblue 2px solid"
                    }}>AliceBlue<br/>#F0F8FF</button>

                </div>

                <div className='purple-shades' id='purple-color'>
                  <p>Shades of Purple</p>

                    {/* indigo button */}
                    <button 
                    onClick={() => setColor("indigo")}
                    style={{
                      "border": "indigo 2px solid"
                    }}>Indigo<br/>#4B0082</button> 

                    {/* rebecca purple button */}
                    <button 
                    onClick={() => setColor("rebeccapurple")}
                    style={{
                      "border": "rebeccapurple 2px solid"
                    }}>RebeccaPurple<br/>#663399</button>

                    {/* blue violet button */}
                    <button 
                    onClick={() => setColor("blueviolet")}
                    style={{
                      "border": "blueviolet 2px solid"
                    }}>BlueViolet<br/>#8A2BE2</button>

                    {/* darkmagenta button */}
                    <button 
                    onClick={() => setColor("darkmagenta")}
                    style={{
                      "border": "darkmagenta 2px solid"
                    }}>DarkMagenta<br/>#8B008B</button>

                    {/* medium purple button */}
                    <button 
                    onClick={() => setColor("mediumpurple")}
                    style={{
                      "border": "mediumpurple 2px solid"
                    }}>MediumPurple<br/>#9370DB</button>

                    {/* darkviolet button */}
                    <button 
                    onClick={() => setColor("darkviolet")}
                    style={{
                      "border": "darkviolet 2px solid"
                    }}>DarkViolet<br/>#9400D3</button>
                    
                    {/* darkorchid button */}
                    <button 
                    onClick={() => setColor("darkorchid")}
                    style={{
                      "border": "darkorchid 2px solid"
                    }}>DarkOrchid<br/>#9932CC</button>

                    {/* medium orchid button */}
                    <button 
                    onClick={() => setColor("mediumorchid")}
                    style={{
                      "border": "mediumorchid 2px solid"
                    }}>MediumOrchid<br/>#BA55D3</button>

                    {/* thistle button */}
                    <button 
                    onClick={() => setColor("thistle")}
                    style={{
                      "border": "thistle 2px solid"
                    }}>Thistle<br/>#D8BFD8</button> 

                    {/* orchid button */}
                    <button 
                    onClick={() => setColor("orchid")}
                    style={{
                      "border": "orchid 2px solid"
                    }}>Orchid<br/>#DA70D6</button>

                    {/* plum button */}
                    <button 
                    onClick={() => setColor("plum")}
                    style={{
                      "border": "plum 2px solid"
                    }}>Plum<br/>#DDA0DD</button>

                    {/* lavender button */}
                    <button 
                    onClick={() => setColor("lavender")}
                    style={{
                      "border": "lavender 2px solid"
                    }}>Lavender<br/>#E6E6FA</button>

                    {/* violet button */}
                    <button 
                    onClick={() => setColor("violet")}
                    style={{
                      "border": "violet 2px solid"
                    }}>Violet<br/>#EE82EE</button>

                    {/* ghost white button */}
                    <button 
                    onClick={() => setColor("ghostwhite")}
                    style={{
                      "border": "ghostwhite 2px solid"
                    }}>GhostWhite<br/>#F8F8FF</button>

                    {/* fuchsia/magenta button */}
                    <button 
                    onClick={() => setColor("fuchsia")}
                    style={{
                      "border": "fuchsia 2px solid"
                    }}>Fuchsia/Magenta<br/>#FF00FF</button>

                    {/* deep pink button */}
                    <button 
                    onClick={() => setColor("deeppink")}
                    style={{
                      "border": "deeppink 2px solid"
                    }}>DeepPink<br/>#FF1493</button>

                    {/* light pink button */}
                    <button 
                    onClick={() => setColor("lightpink")}
                    style={{
                      "border": "lightpink 2px solid"
                    }}>LightPink<br/>#FFB6C1</button>

                    {/* pink button */}
                    <button 
                    onClick={() => setColor("pink")}
                    style={{
                      "border": "pink 2px solid"
                    }}>Pink<br/>#FFC0CB</button>

                    {/* misty rose button */}
                    <button 
                    onClick={() => setColor("mistyrose")}
                    style={{
                      "border": "mistyrose 2px solid"
                    }}>MistyRose<br/>#FFE4E1</button>

                    {/* lavender blush button */}
                    <button 
                    onClick={() => setColor("lavenderblush")}
                    style={{
                      "border": "lavenderblush 2px solid"
                    }}>LavenderBlush<br/>#FFF0F5</button>

                    {/* snow button */}
                    <button 
                    onClick={() => setColor("snow")}
                    style={{
                      "border": "snow 2px solid"
                    }}>Snow<br/>#FFFAFA</button>

                </div>
                </div>
            
            
            </div>
    </div>
  )
}

export default Magic