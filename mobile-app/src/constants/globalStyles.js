import colors from './colors';
import fonts from './fonts';

// utility styles
// /////////////////////////////////////////////////////////////////////////////
export default {
  activeOpacity: 0.7,

  // containers
  // ///////////////////////////////////////////////////////////////////////////
  container: {
    dark: {
      backgroundColor: colors.darkHighlightColor,
      flex: 1
    },
    light: {
      backgroundColor: colors.white,
      flex: 1
    }
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 32
  },

  // HEADER PROPERTIES
  // ///////////////////////////////////////////////////////////////////////////

  nav_button: {
    width: 30,
    height: 40,
    marginLeft: 12,
    alignSelf: "center"
  },

  nav_icon: {
    color: "rgba(29,75,115,1)",
    fontSize: 38
  },

  header_text: {
    fontFamily: fonts.poppins500,
    fontSize: 18,
    alignSelf: "center"
  },

  header_id_button: {
    width: 50,
    height: 50,
    marginRight: 13,
    alignSelf: "center"
  },

  header_id_image_group: {
    width: 50,
    height: 50,
    right: 5,
    alignSelf: "center"
  },

  header_id_image: {
    position: "absolute",
    height: 39,
    width: 39,
    left: 3,
    top: 3
  },

  header_id_circle: {
    width: 44,
    height: 44,
    position: "absolute",
    left: 0,
    top: 0
  },


  // Section properties
  // ///////////////////////////////////////////////////////////////////////////

  section_group: {
    height: 30,
    justifyContent: "center",
    flexDirection: "row",
    //marginTop: 10
  },
  section_group_chat: {
    height: 30,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20
  },
  
  section_group_row: {
    height: 30,
    flexDirection: "row",
    //marginTop: 10
  },
  section_group_padding: {
    marginTop: 20
  },
  section: {
    fontFamily: fonts.poppins500,
    fontSize: 18,
    marginLeft: 15
  },
  section_option: {
      fontFamily: fonts.poppins,
      color: colors.ea_blue,
      fontSize: 14,
      textAlign: "right",
      marginRight: 15,
      marginTop: 2
  },

  section_filler: {
    flex: 1,
    flexDirection: "row"
  },

  // Button styles
  // ///////////////////////////////////////////////////////////////////////////

  // Big Buttons
  big_button_group: {
    height: 80,
    marginTop: 20
  },
  big_button_1: {
    height: 80,
    backgroundColor: colors.ea_pink,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 3,
      height: 3
    },elevation: 30,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    width: 320,
    alignSelf: "center"
  },
  big_button_image: {
    height: 54,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 17,
    marginRight: 18
  },
  big_button_image_prop: {
    width: 42,
    height: 42,
    marginTop: 6
  },
  big_button_header_group: {
    width: 220,
    marginLeft: 20
  },
  big_button_header: {
    fontFamily: fonts.poppins700,
    color: colors.white,
    fontSize: 30,
    lineHeight: 34,
    flex: 1,
    marginRight: 80,
    width: 300
  },
  big_button_p: {
    fontFamily: fonts.poppins300,
    color: colors.white,
    fontSize: 22,
    lineHeight: 28,
    flex: 1,
    width: 300
  },
  big_button_sub: {
    fontFamily: fonts.poppins200,
    color: colors.white,
    fontSize: 12,
    width: 200,
    lineHeight: 14,
    height: 18
  },
  big_button_header_2: {
    top: 0,
    position: "absolute",
    fontFamily: fonts.poppins300,
    color: colors.white,
    fontSize: 24,
    left: 0,
    width: 178,
    lineHeight: 26,
    height: 30
  },
  big_button_p_2: {
    left: 0,
    position: "absolute",
    fontFamily: fonts.poppins700,
    color: colors.white,
    fontSize: 30,
    width: 229,
    lineHeight: 34,
    height: 36,
    top: 26
  },
  big_button_2: {
    height: 80,
    backgroundColor: colors.ea_green,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    width: 320,
    flexDirection: "row",
    alignSelf: "center"
  },


  // Tiles styles
  // ///////////////////////////////////////////////////////////////////////////

  tile_group_2x2: {
    width: 310,
    height: 320,
    alignSelf: "center",
    paddingTop: 20,
    marginBottom: 30
  },

  tile_group_1x2: {
    height: 160,
    flexDirection: "row"
  },

  tile_l: {
    width: 140,
    height: 140,
    marginRight: 10
  },

  tile_r: {
    width: 140,
    height: 140,
    marginLeft: 10,
  },

  tile_image: {
    width: 47,
    height: 47,
    marginTop: 36,
    marginLeft: 47
  },

  tile_row: {
    height: 30,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 16,
    marginRight: 9
  },

  tile_text: {
    fontFamily: fonts.poppins600,
    color: colors.white,
    fontSize: 20,
    lineHeight: 22,
    alignSelf: "flex-end",
    marginBottom: 4
  },

  tile_text_blue: {
    fontFamily: fonts.poppins600,
    color: colors.ea_blue,
    fontSize: 20,
    lineHeight: 22,
    alignSelf: "flex-end",
    marginBottom: 4
  },

  tile_icon: {
    color: colors.white,
    fontSize: 29,
    height: 29,
    width: 29,
    marginLeft: 30,
    marginTop: -5
  },

  tile_icon_blue: {
    color: colors.ea_blue,
    fontSize: 29,
    height: 29,
    width: 29
  },

  tile_grey: {
    height: 140,
    backgroundColor: colors.ea_grey,
    borderRadius: 20,
    width: 140
  },

  tile_chat: {
    height: 140,
    backgroundColor: colors.ea_lblue,
    borderRadius: 20,
    width: 140
  },

  tile_call: {
    height: 140,
    backgroundColor: colors.ea_red,
    borderRadius: 20,
    width: 140
  },

  tile_doc: {
    height: 140,
    backgroundColor: colors.ea_yellow,
    borderRadius: 20,
    width: 140
  },

  tile_identity: {
    height: 140,
    backgroundColor: colors.ea_grey,
    borderRadius: 20,
    width: 140
  },

  // Emergency Screen

  tile_image: {
    width: 34,
    height: 34,
    marginTop: 11,
    marginLeft: 11
  },
  hospital_text: {
    fontFamily: fonts.poppins600,
    color: "rgba(33,33,33,1)",
    fontSize: 20,
    lineHeight: 23,
    width: 107,
    height: 46,
    marginTop: 4,
    marginLeft: 12
  },
  ellipseRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 11
  },
  ellipse: {
    width: 20,
    height: 20,
    marginTop: -1
  },
  tile_tracking_group: {
    width: 106,
    height: 24,
    marginLeft: 4
  },
  tile_tracking_title: {
    left: 0,
    position: "absolute",
    fontFamily: fonts.poppins300,
    color: "rgba(33,33,33,1)",
    fontSize: 10,
    lineHeight: 12,
    top: 0,
    width: 106,
    height: 13
  },
  tile_tracking_content: {
    left: 0,
    position: "absolute",
    fontFamily: fonts.poppins600,
    color: "rgba(33,33,33,1)",
    fontSize: 10,
    lineHeight: 12,
    top: 11,
    letterSpacing: -0.5,
    width: 106,
    height: 13
  },
  tile_map: {
    width: 66,
    height: 66,
    marginTop: 15,
    marginLeft: 38
  },
  tile_map_text: {
    fontFamily: fonts.poppins600,
    color: "rgba(33,33,33,1)",
    fontSize: 20,
    lineHeight: 23,
    width: 120,
    textAlign: "center",
    height: 25,
    marginTop: 15,
    marginLeft: 11
  },

  // Login Screen
  // ///////////////////////////////////////////////////////////////////////////


  login_container: {
    flex: 1,
    backgroundColor: colors.ea_blue
  },

  // Box

  bg_box_group: {
    height: 600,
    marginTop: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  bg_group: {
    height: 450,
    width: 300,
    marginTop: 100,
    justifyContent: "center",
    alignSelf: "center",
  },

  rect: {
    height: 500,
    backgroundColor: "rgba(255,255,255,1)",
    width: 300,
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 10,
      width: 10
    },
    elevation: 90,
    shadowOpacity: 0.53,
    shadowRadius: 30,
    left: 0,
    top: 0
  },

  ea_logo: {
    width: 200,
    height: 200,
    marginTop: 25,
    alignSelf: "center"
  },

  ea_title: {
    fontFamily: fonts.poppins600,
    color: colors.ea_blue,
    textAlign: "center",
    fontSize: 28,
    lineHeight: 32,
    width: 300,
    height: 70,
    marginTop: 30,
    alignSelf: "center"
  },

  ea_paragraph: {
    fontFamily: fonts.poppins300,
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 20,
    width: 275,
    height: 60,
    marginTop: 10,
    alignSelf: "center"
  },

  fingerprint_group: {
    height: 115,
    marginTop: 0,
    justifyContent: "center",
    alignSelf: "center",
  },

  fingerprint_button: {
    height: 99,
    backgroundColor: "rgba(32,189,161,1)",
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 10,
      width: 10
    },
    elevation: 90,
    shadowOpacity: 0.53,
    shadowRadius: 30,
    width: 125,
    justifyContent: "center",
    alignSelf: "center"
  },

  fingerprint_image: {
    width: 58,
    height: 58,
    alignSelf: "center"
  },

  einstellungen: {
    fontFamily: fonts.poppins300,
    position: "absolute",
    bottom: 0,
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 28,
    marginBottom: 15,
    alignSelf: "center"
  },





  // navigation styles
  // ///////////////////////////////////////////////////////////////////////////
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center'
  },

  // button
  // ///////////////////////////////////////////////////////////////////////////
  btn: {
    alignItems: 'center',
    backgroundColor: colors.darkColor,
    borderColor: colors.darkColor,
    borderWidth: 1,
    borderRadius: 4,
    height: 48,
    justifyContent: 'center',
    marginBottom: 16,
    paddingHorizontal: 24,
    paddingVertical: 8
  },
  btnText: {
    color: colors.white,
    textAlign: 'center'
  },

  // text
  // ///////////////////////////////////////////////////////////////////////////
  text: {
    dark: {
      color: colors.white
    },
    light: {
      color: colors.darkColor
    }
  },
  textPacifico: {
    fontFamily: fonts.pacifico,
    fontSize: 20
  },

  // spacers
  // ///////////////////////////////////////////////////////////////////////////
  spacer16: {
    height: 16,
    width: '100%'
  },
  spacer64: {
    height: 64,
    width: '100%'
  }
};
