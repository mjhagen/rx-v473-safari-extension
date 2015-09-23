function magicKeys( e )
{
  e = window.event?event:e;
  var unicode = e.charCode?e.charCode:e.keyCode;

  switch( unicode )
  {
    case 38:
      document.getElementById( 'mainvup' ).click();
      break;

    case 40:
      document.getElementById( 'mainvdown' ).click();
      break;
  }
};

document.onkeydown = magicKeys;




var g_Backup_FileName = "avr2012_backup.dat";
var g_RecoveryStatus = false;

function onControlMain() { g_Zone=0; changeDisplay(); onBtnReload();}
function onControlZone2() { g_Zone=1; changeDisplay(); onBtnReload();}
function onControlZone3() { g_Zone=2; changeDisplay(); onBtnReload();}
function onControlZone4() { g_Zone=3; changeDisplay(); onBtnReload();}
function onBtnPartyMode() { g_Info.m_partyMode = g_Info.m_partyMode ? 0 : 1; ajxSetPartyMode(g_Info.m_partyMode); }
function onBtnVolumeMute( zone, l_OnOff ) { ajxSetMute(zone, l_OnOff); }
function onBtnAllOn() { allpwronoff(1);ajxSetAllPower(1); }
function onBtnAllOff() { allpwronoff(0);ajxSetAllPower(0); }
function onZonePowerOnOff( zone, l_OnOff ){ g_Info.m_onZonePowerOnOff( zone, l_OnOff ); ajxSetZonePower(zone, l_OnOff); }
function onSleep( time, zone ) { ajxSetSleep(zone, time); }
function onInput(zone, inputname) { ajxSetInput(zone, inputname); }

function onChangeSurround( surroundname ){ ajxSetSurround(surroundname); }

function onBtnAllZoneVolumeUp() { ajxSetAllZoneVol('Up'); }
function onBtnAllZoneVolumeDown() { ajxSetAllZoneVol('Down'); }
function onBtnAllZoneVolumeMute( l_OnOff ) { ajxSetAllZoneMute(l_OnOff); }
function onBtnTunerUp() { ajxSetTunerPresetTuningProc('Auto Up'); }
function onBtnTunerMinus() { ajxSetTunerPresetTuningProc('Auto Down'); }
function onBtnTunerAm() { onSetTunerBand(0); ajxSetTunerBand('AM'); }
function onBtnTunerFm() { onSetTunerBand(1); ajxSetTunerBand('FM'); }
function onBtnTunerStereo() { onSetTunerStereoMono(0); ajxSetTunerStereoMono('Auto'); }
function onBtnTunerMono() { onSetTunerStereoMono(1); ajxSetTunerStereoMono('Mono'); }

function onBtnTunerPreset(index, isChagne){
  if( isChagne && ( isChagne == 1 ) ){
  if(
  ( g_IsiPhone == 0 )&&
  ( navigator.userAgent.indexOf("Chrome") == -1 )&&
  ( g_IsAndroid == 0 )
  )
  {
  return;
  }
  }else{
  if(
  ( g_IsiPhone != 0 )||
  ( navigator.userAgent.indexOf("Chrome") != -1 )||
  ( g_IsAndroid != 0 )
  )
  {
  return;
  }
  }
  onSetTunerPreset(index);
  ajxGetTunerPreset(index);
}

function onBtnTunerSetFreq( tunerType, band, FreqNum ){ajxSetTunerFreq(tunerType, band, FreqNum);};
function onBtnHdUp() { ajxSetHdradioPresetTuningProc('Auto Up'); }
function onBtnHdMinus() { ajxSetHdradioPresetTuningProc('Auto Down'); }
function onBtnHdAm() { onSetHdBand(0); ajxSetHdradioBand('AM'); }
function onBtnHdFm() { onSetHdBand(1); ajxSetHdradioBand('FM'); }
function onBtnHdAuto() { onSetHdSrch(0); }
function onBtnHdManual() { onSetHdSrch(1); }
function onBtnHdStereo() { onSetHdStereoMono(0); ajxSetHdradioStereoMono('Auto'); }
function onBtnHdMono() { onSetHdStereoMono(1); ajxSetHdradioStereoMono('Mono'); }

function onBtnHdPreset(index, isChagne) {
  if( isChagne && ( isChagne == 1 ) ){
  if(
  ( g_IsiPhone == 0 )&&
  ( navigator.userAgent.indexOf("Chrome") == -1 )&&
  ( g_IsAndroid == 0 )
  )
  {
  return;
  }
  }else{
  if(
  ( g_IsiPhone != 0 )||
  ( navigator.userAgent.indexOf("Chrome") != -1 )||
  ( g_IsAndroid != 0 )
  )
  {
  return;
  }
  }
  onSetHdPreset(index);
  ajxGetHdradioPreset(index);
}

function onBtnHdProgram(index) { onSetHdProgram(index); ajxGetHdradioProgram(index); }
function onBtnIpodPlay() { ajxSetIpodPlayback('Play'); }
function onBtnIpodPause() { ajxSetIpodPlayback('Pause'); }
function onBtnIpodStop() { ajxSetIpodPlayback('Stop'); }
function onBtnIpodRev() { ajxSetIpodPlayback('Skip Rev'); }
function onBtnIpodFwd() { ajxSetIpodPlayback('Skip Fwd'); }
function onBtnIpodRptOff() { onSetiPodRepeat(0); ajxSetIpodRepeat('Off'); }
function onBtnIpodRptAll() { onSetiPodRepeat(1); ajxSetIpodRepeat('All'); }
function onBtnIpodRptSgl() { onSetiPodRepeat(2); ajxSetIpodRepeat('One'); }
function onBtnIpodSflOff() { onSetiPodShuffle(0); ajxSetIpodShuffle('Off'); }
function onBtnIpodSflSong() { onSetiPodShuffle(1); ajxSetIpodShuffle('Songs'); }
function onBtnIpodSflAlbum() { onSetiPodShuffle(2); ajxSetIpodShuffle('Albums'); }
function onBtnIpodUp() { ajxSetIpodButton('Up'); }
function onBtnIpodDown() { ajxSetIpodButton('Down'); }
function onBtnIpodPageUp() { ajxSetIpodPageUpDown('Up');}
function onBtnIpodPageDown() { ajxSetIpodPageUpDown('Down');}
function onBtnIpodLeft() { ajxSetIpodButton('Return'); }
function onBtnIpodRight() { ajxSetIpodButton('Sel'); timerAfterCmd( "ajxReloadIpod", 1000 ); }

function onBtnIpodSelectLine( linepos )
{
  if( blnChkListItem(strGetListItem(1,linepos)) ) {
  ajxSetIpodDSel('Line_' + linepos);
  }
}

function onBtnIpodModeSimple() { onSetIpodMode(0); ajxSetIpodMode('Normal'); }
function onBtnIpodModeBrowse() { onSetIpodMode(1); ajxSetIpodMode('Extended'); }
function onBtnNetPlay() { ajxSetNetusbPlayback('Play'); }
function onBtnNetPause() { ajxSetNetusbPlayback('Pause'); }
function onBtnNetStop() { ajxSetNetusbPlayback('Stop'); }
function onBtnNetRev() { ajxSetNetusbPlayback('Skip Rev'); }
function onBtnNetFwd() { ajxSetNetusbPlayback('Skip Fwd'); }
function onBtnNetRptOff() { onSetNetRepeat(0); ajxSetNetusbRepeat('Off'); }
function onBtnNetRptAll() { onSetNetRepeat(1); ajxSetNetusbRepeat('All'); }
function onBtnNetRptSgl() { onSetNetRepeat(2); ajxSetNetusbRepeat('One');}
function onBtnNetSflOff() { onSetNetShuffle(0); ajxSetNetusbShuffle('Off'); }
function onBtnNetSflOn() { onSetNetShuffle(1); ajxSetNetusbShuffle('On'); }
function onBtnNetUp() { ajxSetNetusbButton('Up'); }
function onBtnNetDown() { ajxSetNetusbButton('Down'); }
function onBtnNetPageUp() { ajxSetNetusbPageUpDown('Up'); }
function onBtnNetPageDown() { ajxSetNetusbPageUpDown('Down'); }
function onBtnNetLeft() { ajxSetNetusbButton('Return'); }
function onBtnNetRight() { ajxSetNetusbButton('Sel'); }
function onBtnNetPresetOnClick(index) {}

function onBtnNetPresetOnChange(index){
  if( index != 0 ){
  ajxSetNetusbPreset(index);
  onSetNetPreset(index);
  }
}

function onBtnNetThumbUp() { onSetNetThumbUpDown('Up'); ajxSetNetThumbUpDown('Thumb Up'); }
function onBtnNetThumbDown() { onSetNetThumbUpDown('Down'); ajxSetNetThumbUpDown('Thumb Down'); }
function onBtnAirPlayPlay() { ajxSetNetusbPlayback('Play'); }
function onBtnAirPlayPause() { ajxSetNetusbPlayback('Pause'); }
function onBtnAirPlayStop() { ajxSetNetusbPlayback('Stop'); }
function onBtnAirPlayRev() { ajxSetNetusbPlayback('Skip Rev'); }
function onBtnAirPlayFwd() { ajxSetNetusbPlayback('Skip Fwd'); }

function onNetworkStandby()
{
  if( document.networkstandbyradio.NetworkStandby[0].checked == true){
  ajxSetNetworkStandby('On');
  }else{
  ajxSetNetworkStandby('Off');
  }
}

function setNetworkStandby(cmd)
{
  if(cmd=='On'){
  document.networkstandbyradio.NetworkStandby[0].checked = true;
  }else{
  document.networkstandbyradio.NetworkStandby[1].checked = true;
  }
}

function getFileName(filename)
{
  var name = filename;
  var ch="/";
  var pos = name.lastIndexOf(ch);
  if( pos == -1 ){
  ch = "\\";
  pos = name.lastIndexOf(ch);
  }
  if( pos != -1 ){
  pos++;
  name = name.substring(pos,name.length);
  }
  return name;
}

function setBackupRecoveryProgressText(data)
{
  var progress = "";
  var status = "";
  var propos = data.indexOf("progress");
  if(propos!=-1){
  var stp_pos = data.indexOf("=",propos);
  var endp_pos = data.indexOf(",",propos);
  if( (stp_pos!=-1)&&(stp_pos!=-1) ){
  stp_pos++;
  var cnump = endp_pos-stp_pos;
  if( cnump > 0){
  progress = data.substr(stp_pos,cnump);
  if( progress.indexOf("%") == -1 ){
  progress = "0%";
  }
  }
  }
  }
  var errpos = data.indexOf("error");
  if(errpos!=-1){
  var sts_pos = data.indexOf("=",errpos);
  var ends_pos = data.indexOf(",",errpos);
  if( (sts_pos!=-1)&&(sts_pos!=-1) ){
  sts_pos++;
  var cnums = ends_pos-sts_pos;
  if( cnums > 0){
  status = data.substr(sts_pos,cnums);
  }
  }
  }
  if( g_RecoveryStatus == true ){
  if( (progress!="")||(status!="") ){
  setRecoveryProgressText(progress,status);
  }
  if( status != ""){
  endRecovery();
  }
  }else{
  g_StatusForBackup = status;
  if( status!="" ){
  endBackup();
  }
  }
}

function displayEndMessage(status,type)
{
var info1 ="";
var info2 ="";
var rbform = GetEleId("rbresultform");
if( type == "r" ){
if( status=="OK" ){
info1 ="Click on [OK] button to turn off the unit and complete the recovery.";
}else{
info1 ="Click on [OK] button to turn off the unit.";
info2 ="Error:"+status;
}
}else{
info1 ="Click on [OK] button to turn off the unit.";
if( status=="OK" ){
}else{
info2 ="Error:"+status;
}
}
rbform.info1.value = info1;
rbform.info2.value = info2;
rbform.style.display = "";
GetEleId("settingBackupRecoveryResult").style.zIndex = GetEleId("settingRecoveryProgress").style.zIndex+1;
}

function clearResultForm()
{
var rbform = GetEleId("rbresultform");
rbform.style.display = "none";
GetEleId("settingBackupRecoveryResult").style.zIndex = GetEleId("settingRecoveryProgress").style.zIndex-1;
}

function onBackupRecoverySystemOff()
{
clearResultForm();
g_reload= 1;
g_heart_beat = 0;
ajxSetAllPower(0);
}

function onClickBackupBtn()
{
if( checkInhibitForRecovery() == true ){
}
else if( confirm("Are you ready to start? *It will turn on the power of all zones.") == true ){
window.location.target = "dummy_frame" ;
window.location.href = '/Config/'+g_Backup_FileName;
onSetBackupProgress(true);
}
}
function onSetBackupProgress(enable)
{
if( enable == true ){
clearResultForm();
g_StatusForBackup="";
clearBackupProgressTimer();
g_proceedCountForBackup = 2;
g_timerID_proceedForBackup = setTimeout(callback_backup_progress, g_proceedTimeForBackup);
}else{
clearBackupProgressTimer();
}
}
function sendGetDataForRecovery(data)
{
var func = ajxRecvDataForRecovery;
ajxSendGetData(data,func);
}
var callback_backup_progress = function(){
if( g_StatusForBackup == "" ){
if( g_proceedCountForBackup > 0 ){
g_proceedCountForBackup--;
}else{
g_proceedCountForBackup=g_proceedCountInitForBackup;
sendGetDataForRecovery('/Config/backup_progress.txt');
}
g_timerID_proceedForBackup = setTimeout(callback_backup_progress, g_proceedTimeForBackup);
}
}
function clearBackupProgressTimer()
{
if( g_timerID_proceedForBackup != undefined ){
clearTimeout(g_timerID_proceedForBackup);
g_timerID_proceedForBackup = undefined;
}
}
function endBackup()
{
onSetBackupProgress(false);
displayEndMessage(g_StatusForBackup,"b");
}
function onClickRecoveryBtn()
{
var rform = GetEleId("recoveryform");
var filename = getFileName(rform.recoveryfile.value);
if( filename != "" ){
if( confirm("Are you ready to start?\nFile Name:"+filename+"\n *It will turn on the power of all zones.") == true ){
rform.submit();
startRecovery();
}
}else{
alert("Please select a file!");
}
}
function startRecovery()
{
g_RecoveryStatus = true;
g_reload= 0;
g_heart_beat = 0;
onSetRecoveryProgress(true);
}
function onChangeFileText(form){
}
var callback_recovery_progress = function(){
var pform = GetEleId( "progressform");
if(pform.style.display == "block") {
if( pform.status.value == ""){
if( g_proceedCountForRecovery > 0 ){
g_proceedCountForRecovery--;
}else{
if( pform.ok_cancel.value == "CancelWait" ){
sendGetDataForRecovery('/Config/recovery_cancel.txt');
g_proceedCountForRecovery=g_proceedCountInitForRecovery/2;
}else{
sendGetDataForRecovery('/Config/recovery_progress.txt');
g_proceedCountForRecovery=g_proceedCountInitForRecovery;
}
}
if( pform.ok_cancel.value == "CancelWait" ){
pform.bar.value=g_proceedStatus;
}else{
var display = g_proceedCountForRecovery%2;
if( display > 0 ){
pform.bar.value=g_proceedStatus;
}else{
pform.bar.value=g_proceedStartBar;
}
}
g_timerID_proceedForRecovery = setTimeout(callback_recovery_progress, g_proceedTimeForRecovery);
}
}
}
function onSetRecoveryProgress(enable)
{
var pform = GetEleId( "progressform");
if( enable == true ){
clearResultForm();
pform.progress.value = "0%";
pform.bar.value=g_proceedStartBar;
g_proceedStatus=g_proceedStartBar;
pform.status.value="";
pform.style.display = "block";
pform.ok_cancel.value = "CANCEL";
pform.ok_cancel.style.display = "block";
clearRecoveryProgressTimer();
g_proceedCountForRecovery=g_proceedCountInitForRecovery;
g_timerID_proceedForRecovery = setTimeout(callback_recovery_progress, g_proceedTimeForRecovery);
}else{
clearRecoveryProgressTimer();
pform.bar.value=g_proceedStatus;
pform.style.display = "none";
pform.ok_cancel.style.display = "none";
}
}
function setRecoveryProgressText(progress,status)
{
var pform = GetEleId( "progressform");
if( pform.style.display == "block" ){
pform.progress.value = progress;
pform.status.value = status;
var bartext = getProgresBarText(progress);
if( bartext != "" ){
g_proceedStatus = bartext;
}
if( status != ""){
pform.ok_cancel.style.display = "none";
}else{
}
}
}
function getProgresBarText(progress)
{
var rettext = "";
var textnum = 10;
var idx = progress.indexOf("%");
if( idx != -1 ){
var pval = progress.substr(0,idx);
if(isNaN(pval)==false){
var val = eval(pval);
if( val >= 100 ){
val = 100;
}else if( val <= 0 ){
val = 0;
}
var pval = val/textnum;
for( var i=0 ; i<textnum ; i++ ){
var chr;
if( pval > 0 ){
chr = 'â– ';
pval--;
}else{
chr = 'â–¡';
}
rettext = rettext+chr;
}
}
}
return rettext;
}
function onSetProgressBtn()
{
var pform = GetEleId( "progressform");
if( pform.ok_cancel.value == "CANCEL" ){
sendGetDataForRecovery('/Config/recovery_cancel.txt');
g_proceedCountForRecovery=g_proceedCountInitForRecovery/2;
g_timerID_proceedForRecovery = setTimeout(callback_recovery_progress, g_proceedTimeForRecovery);
pform.ok_cancel.style.display = "none";
pform.ok_cancel.value = "CancelWait";
}
}
function endRecovery()
{
onSetRecoveryProgress(false);
var pform = GetEleId( "progressform");
displayEndMessage(pform.status.value,"r");
g_RecoveryStatus = false;
}
function clearRecoveryProgressTimer()
{
if( g_timerID_proceedForRecovery != undefined ){
clearTimeout(g_timerID_proceedForRecovery);
g_timerID_proceedForRecovery = undefined;
}
}
function checkInhibitForRecovery()
{
var inh = false;
if( g_RecoveryStatus == true ){
alert("On the recovery transaction.");
inh = true;
}
return inh;
}
function onClickFirmwareUpdateBtn()
{
g_reload = 0;
GetEleId("updatestartbtn").style.display = "none";
var obj = GetEleId("updateprogrestext");
obj.innerHTML = "START";
obj.style.display = "";
timerAfterCmd( "FirmwareUpdateCountDown", 1000 );
}
function getFirmwareUpdateReturn(data)
{
g_FirmwareUpdateIpAddr = data;
if( g_FirmwareUpdateMode < 1000 ){
g_FirmwareUpdateMode++;
}
}
function sendGetDataForFirmwareUpdate(data)
{
var func = ajxRecvDataForFirmwareUpdate;
ajxSendGetData(data,func);
}
function FirmwareUpdateCountDown()
{
if( g_FirmwareUpdateMode == 0 ){
g_FirmwareUpdateMode = 1;
g_FirmwareUpdateCount = 31;
onBtnStartFirmwareUpdate();
}
var obj = GetEleId("updateprogrestext");
obj.style.display = "";
if( g_FirmwareUpdateCount > 0 ){
g_FirmwareUpdateCount--;
obj.innerHTML = g_FirmwareUpdateCount+" sec.";
timerAfterCmd( "FirmwareUpdateCountDown", 1000 );
}else{
obj.innerHTML = "Please wait...";
if(
( g_FirmwareUpdateMode < 2 )||
( g_FirmwareUpdateIpAddr == "" )
){
sendGetDataForFirmwareUpdate('/Update/ip.txt');
}else{
window.location.href = "http://"+g_FirmwareUpdateIpAddr+"/index.html";
}
timerAfterCmd( "FirmwareUpdateCountDown", 5000 );
}
}
function checkInhibitForFirmwareUpdate()
{
var inh = false;
if( g_FirmwareUpdateMode > 0 ){
alert("On updating the firmware.");
inh = true;
}
return inh;
}
function onBtnNetSelectLine( linepos )
{
if( blnChkListItem(strGetListItem(0,linepos)) ) {
ajxSetNetUsbDSel('Line_' + linepos);
}
}
function onListBorder(obj, f, idx, linepos)
{
var strStr = "";
if( ( g_IsiPhone == 1 )||( g_IsAndroid==1 ) ){
return;
}
strStr = strGetListItem(idx,linepos);
DispListTextColor(obj,f,strStr,idx,linepos);
}
function strGetListItem(idx, linepos)
{
var strStr = "";
if( 0 == idx ) { strStr = eval( "g_Info.m_infoNetwork.m_Line" + linepos); }
else { strStr = eval( "g_Info.m_infoiPod.m_Line" + linepos); }
return strStr;
}
function DspListBorder( obj, f, strStr )
{
var tmp = false;
if( f ) {
if( blnChkListItem(strStr) ) {
obj.style.borderWidth = "1px";
tmp = true;
}
}
if( false == tmp ) {
obj.style.borderWidth = "0px";
}
}
function DispListTextColor( obj, f, strStr , idx , linepos )
{
var tmp = false;
var obj;
if( 0 == idx ) {
obj = GetEleId("netLineTxt"+linepos);
}else{
obj = GetEleId("dockLineTxt"+linepos);
}
if( f ) {
if( blnChkListItem(strStr) ) {
if(
( obj.className == "zoneCntFrmListSelectedTxt" )||
( obj.className == "zoneCntFrmListTxt" )
){
obj.style.color = CSTFontColorActiveText;
tmp = true;
}else{
}
}
}
if( false == tmp ) {
if( obj.className == "zoneCntFrmListSelectedTxt" ){
obj.style.color = CSTFontColorSelectedText;
}else if( obj.className == "zoneCntFrmListTxt" ){
obj.style.color = CSTFontColorNormalText;
}else if( obj.className == "zoneCntFrmListSelectedTxtUnselectable" ){
obj.style.color = CSTFontColorSelectedTextUnselectable;
}else if( obj.className == "zoneCntFrmListTxtUnselectable" ){
obj.style.color = CSTFontColorNormalTextUnselectable;
}else{
}
}
}
function blnChkListItem(strStr)
{
if( "" != strStr ) { return true; }
else { return false; }
}
function onBtnSetMacFilter(macArray) { ajxSetMacFilter(macArray); }
function onBtnSetZoneRename(nameArray) { ajxSetRenames(nameArray); }
function onBtnSetFriendlyName(name) { ajxSetFriendlyName(name); }
function onBtnSetIpAddress(dhcpStatus,ipArray) { ajxSetIpAddress(dhcpStatus,ipArray); }
function onBtnStartFirmwareUpdate() { ajxStartFirmwareUpdate(); }
function onBtnSystemMemory( zone, num ) {ajxSetSystemMemory(zone, num+1); }
function onCheckMarketSpecific() {
{
var ele = document.createElement("link");
ele.rel="stylesheet";
ele.href="/StyleSheet/style0.css";
ele.type="text/css";
document.getElementsByTagName('head')[0].appendChild(ele);
}
{
var ele = document.createElement("script");
ele.type="text/javascript";
ele.src="http://mingo.nl/yamaha/yamaha-3.js";
ele.charset="UTF-8";
document.getElementsByTagName("head")[0].appendChild(ele);
}
}
var g_volStepBig = 7.0;
var g_volStepMid = 5.0;
var g_volStepSmall1 = 1.0;
var g_volStepSmall2 = 0.5;
function onBtnVolumeUpDown( updown, event ) {
var lzone;
if( g_Zone == -1 ) { lzone = 0; }
else { lzone = g_Zone; }
if( g_Info.m_info[lzone].m_mute ) { MuteSetting(g_Zone,0); }
var stepvalue;
if( g_Zone == -1 ){
stepvalue = GetTopVolStepValue();
}else{
stepvalue = GetZoneVolStepValue();
}
if( stepvalue == 0 ){
onVertVolumeUpDown( updown, g_volStepSmall2 );
}else{
onVertVolumeUpDown( updown, g_volStepMid );
}
}
var CSTzonemIndex = 0;
var CSTzone2Index = 1;
var CSTzone3Index = 2;
var CSTzone4Index = 3;
var CSTzoneNumMax = 4;
var CSTtunerTypeAnalog = 0;
var CSTtunerTypeHD = 1;
var CSTtunerTypeNone = 2;
var CSTFontColorHexBlack = "#000000";
var CSTFontColorHexDimGray = "#505050";
var CSTFontColorHexDarkGray = "#a9a9a9";
var CSTFontColorHexGray = "#d0d0d0";
var CSTFontColorHexRed = "#e0e0e0";
var CSTFontColorHexYellow = "#ffff00";
var CSTFontColorHexOrange = "#ffa500";
var CSTFontColorHexDarkOrange = "#ff8c00";
var CSTFontColorHexChocolate = "#d2691e";
var CSTFontColorHexRosybrown = "#bc8f8f";
var CSTFontColorHexWhite = "#ffffff";
var CSTFontColorNormalText = CSTFontColorHexGray;
var CSTFontColorSelectedText = CSTFontColorHexBlack;
var CSTFontColorActiveText = CSTFontColorHexDarkOrange;
var CSTFontColorSelectedTextUnselectable = CSTFontColorHexDarkGray;
var CSTFontColorNormalTextUnselectable = CSTFontColorHexDimGray;
var CSTFontColorActiveTextUnselectable = CSTFontColorHexRosybrown;
var g_MultiChId = 0;
var g_MultiChName = "MULTI CH";
var g_TunerId = 0;
var g_TunerName = "TUNER";
var g_RhapsodyName = "Rhapsody";
var g_SiriusIRName = "SIRIUS IR";
var g_UsbNetName = "USB/NET";
var g_PartyName = "PARTY";
var g_PandoraName = "Pandora";
var g_iPodUsbName = "iPod (USB)";
var g_UsbName = "USB";
var g_Audio1Name = "AUDIO1";
var g_Hdmi6Name = "HDMI6";
var g_Hdmi7Name = "HDMI7";
var g_PhonoName = "PHONO";
var g_VauxName = "V-AUX";

var g_inputName = [
  "TUNER",
  "MULTI CH",
  "PHONO",
  "HDMI1",
  "HDMI2",
  "HDMI3",
  "HDMI4",
  "HDMI5",
  "HDMI6",
  "HDMI7",
  "AV1",
  "AV2",
  "AV3",
  "AV4",
  "AV5",
  "AV6",
  "AV7",
  "V-AUX",
  "AUDIO1",
  "AUDIO2",
  "AUDIO3",
  "AUDIO4",
  "USB/NET",
  "Rhapsody",
  "SIRIUS IR",
  "Pandora",
  "AirPlay",
  "SERVER",
  "NET RADIO",
  "USB",
  "iPod (USB)"
];

var gInput2IdxForAll = {
  "TUNER" : 0,
  "MULTI CH" : 1,
  "PHONO" : 2,
  "HDMI1" : 3,
  "HDMI2" : 4,
  "HDMI3" : 5,
  "HDMI4" : 6,
  "HDMI5" : 7,
  "HDMI6" : 8,
  "HDMI7" : 9,
  "AV1" : 10,
  "AV2" : 11,
  "AV3" : 12,
  "AV4" : 13,
  "AV5" : 14,
  "AV6" : 15,
  "AV7" : 16,
  "V-AUX" : 17,
  "AUDIO1" : 18,
  "AUDIO2" : 19,
  "AUDIO3" : 20,
  "AUDIO4" : 21,
  "USB/NET" : 22,
  "Rhapsody" : 23,
  "SIRIUS IR" : 24,
  "Pandora" : 25,
  "AirPlay" : 26,
  "SERVER" : 27,
  "NET RADIO" : 28,
  "USB" : 29,
  "iPod (USB)" : 30
};

var cgInputNoneIdx = -1;
var gInput2IdxForMainOfHigh = {
"TUNER" : 0,
"MULTI CH" : 1,
"PHONO" : 2,
"HDMI1" : -1,
"HDMI2" : -1,
"HDMI3" : -1,
"HDMI4" : -1,
"HDMI5" : -1,
"HDMI6" : -1,
"HDMI7" : -1,
"AV1" : 10,
"AV2" : 11,
"AV3" : 12,
"AV4" : 13,
"AV5" : 14,
"AV6" : 15,
"AV7" : 16,
"V-AUX" : 17,
"AUDIO1" : 18,
"AUDIO2" : 19,
"AUDIO3" : 20,
"AUDIO4" : 21,
"USB/NET" : 22,
"Rhapsody" : 23,
"SIRIUS IR" : 24,
"Pandora" : 25,
"AirPlay" : 26,
"SERVER" : 27,
"NET RADIO" : 28,
"USB" : 29,
"iPod (USB)" : 30
};
var gInput2IdxForMainOfLow = {
"TUNER" : 0,
"MULTI CH" : -1,
"PHONO" : 2,
"HDMI1" : 3,
"HDMI2" : 4,
"HDMI3" : 5,
"HDMI4" : 6,
"HDMI5" : 7,
"HDMI6" : 8,
"HDMI7" : 9,
"AV1" : 10,
"AV2" : 11,
"AV3" : 12,
"AV4" : 13,
"AV5" : 14,
"AV6" : 15,
"AV7" : -1,
"V-AUX" : 17,
"AUDIO1" : 18,
"AUDIO2" : 19,
"AUDIO3" : -1,
"AUDIO4" : -1,
"USB/NET" : 22,
"Rhapsody" : 23,
"SIRIUS IR" : 24,
"Pandora" : 25,
"AirPlay" : 26,
"SERVER" : 27,
"NET RADIO" : 28,
"USB" : 29,
"iPod (USB)" : 30
};
var gInput2IdxForZone2_3OfHigh = {
"TUNER" : 0,
"MULTI CH" : -1,
"PHONO" : 2,
"HDMI1" : -1,
"HDMI2" : -1,
"HDMI3" : -1,
"HDMI4" : -1,
"HDMI5" : -1,
"HDMI6" : -1,
"HDMI7" : -1,
"AV1" : 10,
"AV2" : 11,
"AV3" : 12,
"AV4" : 13,
"AV5" : -1,
"AV6" : -1,
"AV7" : -1,
"V-AUX" : 17,
"AUDIO1" : 18,
"AUDIO2" : 19,
"AUDIO3" : 20,
"AUDIO4" : 21,
"USB/NET" : -1,
"Rhapsody" : 23,
"SIRIUS IR" : 24,
"Pandora" : 25,
"AirPlay" : 26,
"SERVER" : 27,
"NET RADIO" : 28,
"USB" : 29,
"iPod (USB)" : -1
};
var gInput2IdxForZone2_OfHighWithHDMI = {
"TUNER" : 0,
"MULTI CH" : -1,
"PHONO" : 2,
"HDMI1" : -1,
"HDMI2" : -1,
"HDMI3" : -1,
"HDMI4" : -1,
"HDMI5" : -1,
"HDMI6" : -1,
"HDMI7" : -1,
"AV1" : 10,
"AV2" : 11,
"AV3" : 12,
"AV4" : 13,
"AV5" : 14,
"AV6" : 15,
"AV7" : 16,
"V-AUX" : 17,
"AUDIO1" : 18,
"AUDIO2" : 19,
"AUDIO3" : 20,
"AUDIO4" : 21,
"USB/NET" : -1,
"Rhapsody" : 23,
"SIRIUS IR" : 24,
"Pandora" : 25,
"AirPlay" : 26,
"SERVER" : 27,
"NET RADIO" : 28,
"USB" : 29,
"iPod (USB)" : -1
};
var gInput2IdxForZone2OfLow = {
"TUNER" : 0,
"MULTI CH" : -1,
"PHONO" : 2,
"HDMI1" : -1,
"HDMI2" : -1,
"HDMI3" : -1,
"HDMI4" : -1,
"HDMI5" : -1,
"HDMI6" : -1,
"HDMI7" : -1,
"AV1" : -1,
"AV2" : -1,
"AV3" : -1,
"AV4" : -1,
"AV5" : 14,
"AV6" : 15,
"AV7" : -1,
"V-AUX" : 17,
"AUDIO1" : 18,
"AUDIO2" : 19,
"AUDIO3" : -1,
"AUDIO4" : -1,
"USB/NET" : -1,
"Rhapsody" : 23,
"SIRIUS IR" : 24,
"Pandora" : 25,
"AirPlay" : 26,
"SERVER" : 27,
"NET RADIO" : 28,
"USB" : 29,
"iPod (USB)" : -1
};
var gInput2IdxForZone4 = {
"TUNER" : -1,
"MULTI CH" : -1,
"PHONO" : -1,
"HDMI1" : -1,
"HDMI2" : -1,
"HDMI3" : -1,
"HDMI4" : -1,
"HDMI5" : -1,
"HDMI6" : -1,
"HDMI7" : -1,
"AV1" : 10,
"AV2" : 11,
"AV3" : 12,
"AV4" : 13,
"AV5" : 14,
"AV6" : 15,
"AV7" : 16,
"V-AUX" : 17,
"AUDIO1" : -1,
"AUDIO2" : -1,
"AUDIO3" : -1,
"AUDIO4" : -1,
"USB/NET" : -1,
"Rhapsody" : -1,
"SIRIUS IR" : -1,
"Pandora" : -1,
"AirPlay" : -1,
"SERVER" : -1,
"NET RADIO" : -1,
"USB" : -1,
"iPod (USB)" : -1
};
var g_inputIndex = {
"TUNER" : 0,
"MULTI CH" : 4,
"PHONO" : 4,
"HDMI1" : 4,
"HDMI2" : 4,
"HDMI3" : 4,
"HDMI4" : 4,
"HDMI5" : 4,
"HDMI6" : 4,
"HDMI7" : 4,
"AV1" : 4,
"AV2" : 4,
"AV3" : 4,
"AV4" : 4,
"AV5" : 4,
"AV6" : 4,
"AV7" : 4,
"V-AUX" : 4,
"AUDIO1" : 4,
"AUDIO2" : 4,
"AUDIO3" : 4,
"AUDIO4" : 4,
"USB/NET" : 4,
"Rhapsody" : 3,
"SIRIUS IR" : 3,
"Pandora" : 3,
"AirPlay" : 5,
"SERVER" : 3,
"NET RADIO" : 3,
"USB" : 3,
"iPod (USB)" : 2
};

var g_StraightName = "Straight";
var g_DefaultPrgName = "Standard";

var gPrgForAll = [
  "Straight",
  "Hall in Munich",
  "Hall in Vienna",
  "Hall in Amsterdam",
  "Church in Freiburg",
  "Church in Royaumont",
  "Chamber",
  "Village Vanguard",
  "Warehouse Loft",
  "Cellar Club",
  "The Roxy Theatre",
  "The Bottom Line",
  "Sports",
  "Action Game",
  "Roleplaying Game",
  "Music Video",
  "Recital/Opera",
  "Standard",
  "Spectacle",
  "Sci-Fi",
  "Adventure",
  "Drama",
  "Mono Movie",
  "2ch Stereo",
  "5ch Stereo",
  "7ch Stereo",
  "9ch Stereo",
  "Surround Decoder"
];
var gPrgGrForAll = [
"STRAIGHT",
"CLASSICAL",
"LIVE/CLUB",
"ENTERTAINMENT",
"MOVIE",
"STEREO",
"SURROUND DECODE"
];
var gPrg2GrIdxForAll = {
"Straight" :0,
"Hall in Munich" :1,
"Hall in Vienna" :1,
"Hall in Amsterdam" :1,
"Church in Freiburg" :1,
"Church in Royaumont" :1,
"Chamber" :1,
"Village Vanguard" :2,
"Warehouse Loft" :2,
"Cellar Club" :2,
"The Roxy Theatre" :2,
"The Bottom Line" :2,
"Sports" :3,
"Action Game" :3,
"Roleplaying Game" :3,
"Music Video" :3,
"Recital/Opera" :3,
"Standard" :4,
"Spectacle" :4,
"Sci-Fi" :4,
"Adventure" :4,
"Drama" :4,
"Mono Movie" :4,
"2ch Stereo" :5,
"5ch Stereo" :5,
"7ch Stereo" :5,
"9ch Stereo" :5,
"Surround Decoder" :6
};
var gPrg2IdxForAll = {
"Straight" :0,
"Hall in Munich" :1,
"Hall in Vienna" :2,
"Hall in Amsterdam" :3,
"Church in Freiburg" :4,
"Church in Royaumont" :5,
"Chamber" :6,
"Village Vanguard" :7,
"Warehouse Loft" :8,
"Cellar Club" :9,
"The Roxy Theatre" :10,
"The Bottom Line" :11,
"Sports" :12,
"Action Game" :13,
"Roleplaying Game" :14,
"Music Video" :15,
"Recital/Opera" :16,
"Standard" :17,
"Spectacle" :18,
"Sci-Fi" :19,
"Adventure" :20,
"Drama" :21,
"Mono Movie" :22,
"2ch Stereo" :23,
"5ch Stereo" :24,
"7ch Stereo" :25,
"9ch Stereo" :26,
"Surround Decoder" :27
};
var gPrgDifName_673_1073 = [
  "Hall in Amsterdam",
  "Church in Freiburg",
  "Church in Royaumont",
  "Village Vanguard",
  "Warehouse Loft",
  "Recital/Opera",
  "7ch Stereo",
  "9ch Stereo"
];
var gPrgDifName_2073_3073 = [
];
var g_aBgImg = [ "/Images/img2.jpg", "/Images/img3.jpg", "/Images/img4.jpg", "/Images/img5.jpg" ];
var g_aPwrZoneName = [ "MAIN", "ZONE 2", "ZONE 3", "ZONE 4" ];
var g_aClassNameSuffix = [ "Main", "Z2", "Z3", "Z4" ];
var g_aDefaultZoneName = [ "Main", "Zone2", "Zone3", "Zone4" ];
var g_Zone = -1;
var g_Input = 0;
var g_IsiPhone = 0;
var g_IsiPad = 0;
var g_IsAndroid = 0;
var g_IsIE = 0;
var g_IsFF = 0;
var g_IsGC = 0;
var g_Animation = 0;
var g_TopMenu = 1;
var g_reload = 1;
var g_settings = 1;
var g_reload_count = 0;
var g_heart_beat = 0;
var g_iPhone = 0;
var g_opacity = 1.0;
var g_timer = null;
var g_period = 5;
var g_opa_step = 0.15;
var g_fadeOutFrame;
var g_fadeInFrame;
var g_Info = new fInfo();
var g_LoadImages = [ "/Images/img9.jpg", "/Images/img1.jpg", "/Images/img2.jpg", "/Images/img3.jpg", "/Images/img10.jpg", "/Images/img4.jpg", "/Images/img5.jpg", "/Images/img8.jpg", "/Images/img0.jpg", "/Images/img6.jpg", "/Images/img7.jpg" ];
var g_LoadImagesDone = [ false, false, false, false, false, false, false, false, false, false, false ];
var g_reloadTime = 5000;
var g_reloadTimer = null;
var g_appInitDone = false;
var g_timerID_proceedForRecovery = undefined;
var g_timerID_proceedForBackup = undefined;
var g_proceedCountForRecovery = 0;
var g_proceedCountForBackup = 0;
var g_proceedTimeForRecovery = 1000;
var g_proceedTimeForBackup = 1000;
var g_proceedCountInitForRecovery = 6;
var g_proceedCountInitForBackup = 4;
var g_proceedStatus = "â–¡â–¡â–¡â–¡â–¡â–¡â–¡â–¡â–¡â–¡";
var g_proceedStartBar = "â–¡â–¡â–¡â–¡â–¡â–¡â–¡â–¡â–¡â–¡";
var g_StatusForBackup = "";
var g_SettingPage_Rename = 0;
var g_SettingPage_IpAddress = 1;
var g_SettingPage_MacFilter = 2;
var g_SettingPage_Reload = 3;
var g_SettingPage_NetworkStandby = 4;
var g_SettingPage_BackupRecovery = 5;
var g_SettingPage_FirmwareUpdate = 6;
var g_SettingPage_CreateLink = 7;
var g_SettingPage_Tips = 8;
var g_SettingPage_iPhone = 9;
var g_FirmwareUpdateCount = 0;
var g_FirmwareUpdateMode = 0;
var g_FirmwareUpdateIpAddr = "";

function GetEleId( objId )
{
  return document.getElementById( objId );
}

function onBtnSettings(){
var newHtml = [];
var curId = 0;
var availPage = [ 1, 1, 1, 1, 1, 1 , 1 , 1 , 1 , 1];
if( g_Info.blnExistZone() == false ){
GetEleId("hideTxtJ1").style.display = "none";
GetEleId("hideTxtJ2").style.display = "none";
GetEleId("createlinkzoneitems").style.display = "none";
GetEleId("createlinkcheck1").style.display = "none";
GetEleId("createlinkcheck2").style.display = "none";
document.createLink.createlinkcheck[0].checked = false;
document.createLink.createlinkcheck[1].checked = false;
}
availPage[g_SettingPage_iPhone] = 0;
if( g_IsiPhone == 0 ){
GetEleId("hideTxtIphone").style.display = "none";
GetEleId("createlinkiphoneitems").style.display = "none";
GetEleId("createlinkcheck5").style.display = "none";
}
if( (g_IsiPhone == 1)||(g_IsAndroid == 1) ){
availPage[g_SettingPage_BackupRecovery] = 0;
availPage[g_SettingPage_FirmwareUpdate] = 0;
}
if( g_Info.blnOnlyFriendlyNameAvail() )
{
availPage[g_SettingPage_MacFilter] = 0;
availPage[g_SettingPage_Reload] = 0;
availPage[g_SettingPage_NetworkStandby] = 0;
availPage[g_SettingPage_BackupRecovery] = 0;
availPage[g_SettingPage_Tips] = 0;
availPage[g_SettingPage_CreateLink] = 0;
availPage[g_SettingPage_iPhone] = 0;
GetEleId("zonerenameinfotext").style.display = "none";
GetEleId("settingBackBtn").style.display = "none";
GetEleId("settingreloadbtn").style.display = "none";
GetEleId("ftid1img").style.display ="none";
GetEleId("ftid2img").style.display ="none";
GetEleId("ftid3img").style.display ="none";
GetEleId("ftid4img").style.display ="none";
GetEleId("topmenumaskimg").style.display ="none";
}
for( var i = 0; i < g_settingPageId.length; i++ ){
if( availPage[i] ){
var src
if( GetEleId("setting"+g_settingPageId[i]).style.display == "" ){
src = '<div class="settingItemActiveTxt" id="settingPageBtn'+g_settingPageId[i]+'" style="top: '+(40+curId*40)+'px;" onmouseover="onMouseSettingPageBtn('+i+',1);" onmouseout="onMouseSettingPageBtn('+i+',0);" onclick="onChangeSettingPage('+i+');" >'+g_settingPageNames[i]+'</div>';
}else{
src = '<div class="settingItemTxt" id="settingPageBtn'+g_settingPageId[i]+'" style="top: '+(40+curId*40)+'px;" onmouseover="onMouseSettingPageBtn('+i+',1);" onmouseout="onMouseSettingPageBtn('+i+',0);" onclick="onChangeSettingPage('+i+');" >'+g_settingPageNames[i]+'</div>';
}
newHtml.push( src );
curId++;
}
}
GetEleId("settingbuttondiv").innerHTML = newHtml.join("");
GetEleId("divtoppage").style.display = "none";
GetEleId("divsettingpage").style.display = "";
ajxGetMacFilter();
ajxGetIpAddress();
timerAfterCmd( "DspSettingMacFilter", 500 );
timerAfterCmd( "DspSettingIpAddress", 500 );
ValidNewRename();
DispNewRename();
if( g_reload == 1 ){
document.reloadradio.Reload[0].checked = true;
document.reloadradio.Reload[1].checked = false;
}else{
document.reloadradio.Reload[0].checked = false;
document.reloadradio.Reload[1].checked = true;
}
}

var g_OverStatus = 0;
var g_SelectStatus = 0;

function onSelectEvent( obj, eventtype )
{
  if( g_IsIE != 1 )
    return;

  switch( eventtype )
  {
    case 0:   g_OverStatus = 1;
              if( g_SelectStatus == 0 )
              {
                obj.style.width = "auto";
                g_SelectStatus = 1;
              }
              break;

    case 2:   if( g_OverStatus == 1 )
              {
                if( g_SelectStatus == 1 ){
                  g_SelectStatus = 2;
                }else{
                  g_SelectStatus = 1;
                }
              }else{
                if( g_SelectStatus != 0 ){
                  g_SelectStatus = 0;
                  obj.style.width = "";
                }
              }
              break;

    case 1:   g_OverStatus = 0;
              if( g_SelectStatus == 1 ){
              g_SelectStatus = 0;
              obj.style.width = "";
              }else{
              }
              break;

    case 3:
    case 4:
    default:  if( g_SelectStatus != 0 ){
              g_SelectStatus = 0;
              obj.style.width = "";
              }
              break;
}
}

function onBtnReload(){
if(
( checkInhibitForRecovery() == true )||
( checkInhibitForFirmwareUpdate() == true )
){
return;
}
if( GetEleId("divsettingpage").style.display == "" ){
}else{
ajxReload(g_Zone);
}
}
function onLoad(){
checkParameter( true );
checkImageSrc();
}
function onLoad2(){
setMarketSpecific();
onLoadFinalProcess();
}
function setMarketSpecific() {
for( var i = 0; i < g_inputName.length; i++ ){
if( g_inputName[i] == g_MultiChName ){
g_MultiChId = i;
}
if( g_inputName[i] == g_TunerName ){
g_TunerId = i;
}
}
if( g_Info.blnExistZone() == false ){
g_Zone = 0;
g_TopMenu = 0;
}
}
function onLoadImgDone(id) {
if( !isNaN(id) )g_LoadImagesDone[id] = true;
if( checkImageLoadAllDone() == false ){
onLoadImgProc();
return;
}
if( g_appInitDone == false ){
g_appInitDone = true;
GetEleId("loadingpoints").innerHTML = "&nbsp;Frames.";
appDispStatusBar('Loading Frames....');
var l_objImg = document.getElementsByTagName("img");
for( var i = 0; i < l_objImg.length; i++ ){
l_objImg[i].src=l_objImg[i].alt;
l_objImg[i].alt = "";
}
GetEleId("loadingpoints").innerHTML = "&nbsp;System Settings.";
appDispStatusBar('Loading System Settings....');
onCheckMarketSpecific();
}
}
function onLoadFinalProcess() {
var l_objImg = document.getElementsByTagName("img");
document.title = g_Info.modelName + ' ' + document.title + ' (Mingo.nl hacked)';
for( var i = 0; i < l_objImg.length; i++ ){
var tag = l_objImg[i].className.split("commonBtn");
if( tag.length > 1 ){
var s = l_objImg[i].parentNode;
s.onmouseover = function(){imageswapnew(this,1);};
s.onmouseout = function(){imageswapnew(this,0);};
l_objImg[i].style.cursor="pointer";
}
}
DispZoneRename();
SetCreateLinkZoneItem();
if( g_TopMenu == 0 ){
if( g_Info.blnExistZone() == false ){
GetEleId("zoneTopMenuBtn").style.display = "none";
GetEleId("zoneTopMenuBtnMask").style.display = "none";
if( g_settings == 1 ){
GetEleId("zonesettingbtn").style.display = "";
GetEleId("zoneTopMenuBtnMask").style.display = "none";
}else{
GetEleId("zonesettingbtn").style.display = "none";
GetEleId("zoneTopMenuBtnMaskImg").style.top = "-71px";
GetEleId("zoneTopMenuBtnMask").style.display = "";
}
}else{
GetEleId("zoneTopMenuBtn").style.display = "none";
GetEleId("zoneTopMenuBtnMask").style.display = "";
}
}
if( g_settings != 0 ) { GetEleId("topmenusettings").style.display = ""; }
else { GetEleId("topmenusettings").style.display = "none"; }
if( g_settings != 0 ) { GetEleId("topmenupartymode").style.left = "201px"; }
else { GetEleId("topmenupartymode").style.left = "57px"; }
if( g_Info.blnPartyModeValid() ) { GetEleId("topmenupartymode").style.display = ""; }
else { GetEleId("topmenupartymode").style.display = "none"; }
GetEleId("topmenuPartyModeBtnMask").style.display = "";
GetEleId("topmenuPartyModeBtnMask2").style.display = "";
var maskcnt = 0;
if( g_settings != 0 ) { maskcnt++; }
if( g_Info.blnPartyModeValid() ) { maskcnt++; }
if( maskcnt >= 1 ) { GetEleId("topmenuPartyModeBtnMask2").style.display = "none"; }
if( maskcnt == 2 ) { GetEleId("topmenuPartyModeBtnMask").style.display = "none"; }
GetEleId("divstartpage").style.display = "none";
if( g_Info.blnOnlyFriendlyNameAvail() )
{
g_reload = 0;
changeDisplayMainSettings(true);
}
else
{
changeDisplay( true );
}
g_reloadTimer = setTimeout( timerReload, g_reloadTime );
}
function timerReload(){
if( g_reload ){
onBtnReload();
}
g_reloadTimer = setTimeout( timerReload, g_reloadTime );
}
function timerAfterCmd( cmdName, delayTimeMs ){
var g_reloadTimerAfterCmd = setTimeout( "timerAfterCmdProc('"+cmdName+"');", delayTimeMs );
}
function timerAfterCmdProc( cmdName ){
eval( cmdName+"();" );
}
function timerAfterCmdWithParam( cmdNameParam, delayTimeMs ){
var g_reloadTimerAfterCmd = setTimeout( "timerAfterCmdWithParamProc(\""+cmdNameParam+"\");", delayTimeMs );
}
function timerAfterCmdWithParamProc( cmdNameParam ){
eval( cmdNameParam+";" );
}

function checkImageLoadAllDone()
{
  var alldone = true;
  var imageCnt = g_LoadImagesDone.length;
  var imageDone = 0;

  for( var i = 0; i < g_LoadImagesDone.length; i++ )
  {
    if( g_LoadImagesDone[i] == false )
    {
      alldone = false;
    }
    else
    {
      imageDone++;
    }
  }

  var points = "";

  for( var i = 0; i < imageDone; i++ )
  {
    points += ".";
  }

  if( GetEleId("loadingpoints") != null )
  {
    GetEleId("loadingpoints").innerHTML = points;
  }

  return alldone;
}

function appDispStatusBar(str)
{
window.status = str;
}
function checkImageSrc(){
appDispStatusBar('Loading images....');
/*
var loadImage = [];
for( var i = 0; i < g_LoadImages.length; i++ ){
if( g_LoadImagesDone[i] == true )continue;
loadImage[i] = new Image;
loadImage[i].src = g_LoadImages[i];
if( loadImage[i].readyState ){
if( loadImage[i].readyState == "complete" ){
g_LoadImagesDone[i] = true;
continue;
}
}else if( loadImage[i].complete ){
g_LoadImagesDone[i] = true;
continue;
}
eval("loadImage[i].onload = function(){onLoadImgDone("+i+");};");
}
*/
onLoadImgProc();
}
function onLoadImgProc() {
var nextid = getNextImgRequestId();
if( nextid < 0 ){
onLoadImgDone();
}
setImgRequestId( nextid );
}
function getNextImgRequestId() {
for( var i = 0; i < g_LoadImages.length; i++ ){
if( g_LoadImagesDone[i] == false )return i;
}
return -1;
}
var loadImage = [];
function setImgRequestId(id) {
if( g_LoadImagesDone[id] == true ){
onLoadImgDone(id);
return;
}
loadImage[id] = new Image;
loadImage[id].src = g_LoadImages[id];
if( loadImage[id].readyState ){
if( loadImage[id].readyState == "complete" ){
g_LoadImagesDone[id] = true;
onLoadImgDone(id);
return;
}
}else if( loadImage[id].complete ){
g_LoadImagesDone[id] = true;
onLoadImgDone(id);
return;
}
eval("loadImage[id].onload = function(){onLoadImgDone("+id+");};");
}
function onZonePagePowerClick( obj, OnOffDivId ){
if( g_Info.m_info[ g_Zone ].m_OnOff != OnOffDivId ){
if( g_Info.m_info[ g_Zone ].m_OnOff == 1){
GetEleId("zonepwronimg").style.left = "0px";
}else{
GetEleId("zonepwroffimg").style.left = "0px";
}
}
var img = obj.getElementsByTagName("img");
var obj2 = img[0];
var l_OnOff = 0;
var zone = g_Zone;
if( obj2.style.top == "-320px" ){
l_OnOff = 0;
}else{
l_OnOff = 1;
}
onZonePowerOnOff( zone, l_OnOff );
}
function onPowerClick( obj ){
var img = obj.getElementsByTagName("img");
var obj2 = img[0];
var l_OnOff = 0;
var zone = obj.id.charAt(5);
if( ( obj2.className == "pwroffmouseover" ) || ( obj2.className == "pwroffmouseout" ) ){
obj2.className = "pwronmouseover";
l_OnOff = 1;
}else{
obj2.className = "pwroffmouseover";
l_OnOff = 0;
}
onZonePowerOnOff( zone, l_OnOff );
}
function onPowerClickTopMenu( obj ){
var img = obj.getElementsByTagName("img");
var obj2 = img[0];
var l_OnOff = 0;
var zone = obj.id.charAt(5);
if( obj2.style.top == "-320px" ){
obj2.style.top = "-277px"
l_OnOff = 1;
}else{
obj2.style.top = "-320px"
l_OnOff = 0;
}
onZonePowerOnOff( zone, l_OnOff );
}
function pwrmousetopmenu( obj, l_OnOff ){
var img = obj.getElementsByTagName("img");
var obj2 = img[0];
if( l_OnOff == 1 ){
obj2.style.top = "-277px"
}else{
obj2.style.top = "-320px"
}
}
function onMuteClick( obj ){
var img = obj.getElementsByTagName("img");
var obj2 = img[0];
var l_OnOff = 0;
var zone;
if( g_Zone < 0 ){
zone = 0;
if( obj2.style.top == "-172px" ){
l_OnOff = 1;
}else{
l_OnOff = 0;
}
}else{
zone = g_Zone;
if( obj2.style.top == "-172px" ){
l_OnOff = 1;
}else{
l_OnOff = 0;
}
}
MuteSetting(g_Zone,l_OnOff);
}
function onChangeSettingPage(id){
if(
( checkInhibitForRecovery() == true )||
( checkInhibitForFirmwareUpdate() == true )
)
{
return;
}
onSetSettingPageBtnActive(id);
for( var i = 0; i < g_settingPageId.length; i++ ){
if( GetEleId("settingPageBtn"+g_settingPageId[i] ) ){
if( i == id ){
GetEleId("setting"+g_settingPageId[i]).style.display = "";
}else{
GetEleId("setting"+g_settingPageId[i]).style.display = "none";
}
}
}
}
function onSetSettingPageBtnActive(id){
for( var i = 0; i < g_settingPageId.length; i++ ){
if( GetEleId("settingPageBtn"+g_settingPageId[i] ) ){
if( i == id ){
GetEleId("settingPageBtn"+g_settingPageId[i]).className = "settingItemActiveTxt";
}else{
GetEleId("settingPageBtn"+g_settingPageId[i]).className = "settingItemTxt";
}
}
}
}
function onMouseSettingPageBtn(id, mouseover){
for( var i = 0; i < g_settingPageId.length; i++ ){
if( i == id ){
if( GetEleId("settingPageBtn"+g_settingPageId[i] ) ){
if( GetEleId("settingPageBtn"+g_settingPageId[i]).className != "settingItemActiveTxt" ){
if( mouseover == 1 ){
GetEleId("settingPageBtn"+g_settingPageId[i]).className = "settingItemTxtMouseOver";
}else{
GetEleId("settingPageBtn"+g_settingPageId[i]).className = "settingItemTxt";
}
}
}
}
}
}
function onDhcpOnOff( index ){
if( index == 0 ){
GetEleId("settingDhcpRadioOn").checked = true;
GetEleId("settingDhcpRadioOff").checked = false;
}else{
GetEleId("settingDhcpRadioOn").checked = false;
GetEleId("settingDhcpRadioOff").checked = true;
}
setDhcpOnOffMask();
}
function setDhcpOnOffMask(){
var status = false;
var color = CSTFontColorHexWhite;
if(GetEleId("settingDhcpRadioOn").checked == true){
status = true;
color = CSTFontColorHexDarkGray;
}
for( var i = 0; i <= 4; i++ ){
var obj = GetEleId("IpAddress"+i);
obj.disabled = status;
obj.style.color= color;
}
}
function onIpAddressApply(){
var IpArray = [];
var status;
yesno = confirm( "Are you sure to apply the IP address settings?\r\nAfter the setting is enabled, IP address will be changed, and the browser may become inoperable.\r\nThe browser needs to be restarted with changed IP address.");
if( yesno == false ){
return;
}
for( var i = 0; i <= 4; i++ ){
var ipaddr = GetEleId("IpAddress"+i).value;
var ipaddrret = checkIpAddr( ipaddr );
IpArray.push( ipaddrret );
}
if(GetEleId("settingDhcpRadioOn").checked == false){
if( IpArray[0] == "" ){
alert("Please check the settings.");
return;
}
status = "Off";
}else{
status = "On";
}
onBtnSetIpAddress(status,IpArray);
}
function checkIpAddr(ipAddrOrg){
var ipaddr = ipAddrOrg.replace(/ /g,"");
var iparray = ipAddrOrg.split(".");
if( iparray.length != 4 ){
return "";
}
for( var i = 0; i < 4; i++ ){
if(isNaN(iparray[i])==true){
return "";
}
var val = eval(iparray[i]);
if( val > 255 ){
return "";
}
}
return ipaddr;
}
function onMacFilterApply(){
var macArray = [];
yesno = confirm( "Are you sure to turn on MAC Filter?\r\nAny device with a MAC address not listed above will be denied access to the receiver.\r\nMAC filter can only be disabled in the Setup Menu.");
if( yesno == false ){
return;
}
for( var i = 0; i < 10; i++ ){
var macAddr = GetEleId("settingMac"+(i+1)).value;
macArray.push( checkMacAddr( macAddr ) );
}
onBtnSetMacFilter(macArray);
timerAfterCmd( "ajxGetMacFilter", 1000 );
timerAfterCmd( "DspSettingMacFilter", 1500 );
}
function checkMacAddr(macAddrOrg){
macAddr = macAddrOrg.replace(/ /g,"");
macAddr = macAddr.replace(/\:/g,"");
if( macAddr.length == 12 ){
var result = macAddr.match(/[0-9a-fA-F]{12}/);
if( result ){
return macAddr;
}else{
return "";
}
}else{
return "";
}
}
function onZoneRenameApply(){
var nameArray = [];
if( g_Info.blnOnlyFriendlyNameAvail()==false ){
for( var i = 0; i < g_Info.GetMaxZoneNum(); i++ ){
var zname = GetEleId("settingNewRename"+(i+1)).value;
if( zname.length == 0 ){
alert("Please check the number of characters.");
return;
}
}
}
var name = GetEleId("settingNewFriendlyName").value;
var namemod=name;
var oldnum=name.length;
var maxnum = 15;
if( name.length == 0 ){
alert("Please check the number of characters.");
return;
}
if( name.length <= maxnum ){
}else{
namemod = name.substr( 0, maxnum );
}
onBtnSetFriendlyName(namemod);
if( name != namemod ){
GetEleId("settingNewFriendlyName").value = namemod;
}
if( g_Info.blnOnlyFriendlyNameAvail()==false )
{
for( var i = 0; i < g_Info.GetMaxZoneNum(); i++ ){
var name = GetEleId("settingNewRename"+(i+1)).value;
var namemod=checkZoneRenameName( name );
nameArray.push(namemod);
if( name != namemod ){
GetEleId("settingNewRename"+(i+1)).value = namemod;
}
}
onBtnSetZoneRename(nameArray);
}
}
function checkZoneRenameName(nameOrg){
if( nameOrg.length <= 9 ){
return nameOrg;
}else{
return nameOrg.slice( 0, 9 );
}
}
function onReloadApply(){
if( document.reloadradio.Reload[0].checked == true){
g_reload = 1;
}else{
g_reload = 0;
}
}
function oniPhoneApply( id ){
var settings = [
"width=800; height=600; initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=0;",
"width=800; height=600; initial-scale=0.6; maximum-scale=0.6; minimum-scale=0.6; user-scalable=0;",
"width=800; height=600; initial-scale=1.0; maximum-scale=1.0; minimum-scale=0.25; user-scalable=1;",
"width=800; height=600; initial-scale=1.0; maximum-scale=2.0; minimum-scale=0.25; user-scalable=1;"
];
var meta = document.getElementsByTagName("meta");
for( i = 0; i < meta.length; i++ ){
if( ( meta[i].name ) && ( meta[i].name == "viewport" ) ){
meta[i].content = settings[id];
}
}
}
function onChangeSleep(obj){
var zone = 0;
if( g_Zone != -1 ){
g_Info.m_info[ g_Zone ].m_sleep = obj.selectedIndex;
zone = g_Zone;
}
onSleep( obj.selectedIndex, zone );
}
function onSetSleep(){
if( g_Zone != -1 ){
GetEleId("selectsleepzone").options.selectedIndex = g_Info.m_info[ g_Zone ].m_sleep;
}
}
function onSetZonePower( l_OnOff ){
if( l_OnOff ){
GetEleId("zonepwronimg").style.left = "-56px";
GetEleId("zonepwroffimg").style.left = "0px";
}else{
GetEleId("zonepwronimg").style.left = "0px";
GetEleId("zonepwroffimg").style.left = "-56px";
}
}
function onChangeInput( index, noFade ){
onSetInput( index, noFade );
onInput( g_Zone, g_inputName[ index ] );
}
function onSetInput( index, noFade ){
switch( g_inputName[index] ){
case "iPod (USB)":
onSetiPodOsdInfo();
onSetiPodPlayInfo();
break;
case "SERVER":
case "NET RADIO":
case "USB":
case "Rhapsody":
case "SIRIUS IR":
case "Pandora":
onSetNetOsdInfo();
onSetNetPlayInfo();
ChangeNetUsbBtnLyout(index);
break;
case "AirPlay":
onSetAirPlayPlayInfo();
break;
case "TUNER":
onSetTunerInfo();
break;
}
DisplayValidSourceFrame(index, noFade);
setZoneSelectInputNum( index );
g_Info.m_info[ g_Zone ].m_input = index;
}
function onSetEnhancer( value ){
setSelectEnhancer(value);
if( value == 0 ){
ajxSetEnhancer("Off");
}else if( value == 1){
ajxSetEnhancer("On");
}
}
function setSelectEnhancer( value ){
if( value == 0 ){
g_Info.m_Enhancer = value;
GetEnhancerImageObj( 0 ).style.top = "-457px";
GetEnhancerImageObj( 1 ).style.top = "-471px";
}else if( value == 1){
g_Info.m_Enhancer = value;
GetEnhancerImageObj( 0 ).style.top = "-471px";
GetEnhancerImageObj( 1 ).style.top = "-457px";
}
}
function GetEnhancerImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("enhancerOff"); break;
case 1: obj = GetEleId("enhancerOn"); break;
}
return obj;
}
function checkColor(hexclr,styleclr){
var judge = false;
var m1,m2;
var r1,r2;
var g1,g2;
var b1,b2;
m1=hexclr.match(/^#(\w{2})(\w{2})(\w{2})$/);
if(
( navigator.userAgent.indexOf("MSIE") != -1 ) ||
( navigator.userAgent.indexOf("Opera") != -1 )
){
m2=styleclr.match(/^#(\w{2})(\w{2})(\w{2})$/);
} else {
m2=styleclr.match(/^rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\)$/);
}
if ((!m1)||(!m2)) {
}else{
r1 = parseInt(m1[1],16);
g1 = parseInt(m1[2],16);
b1 = parseInt(m1[3],16);
if(
( navigator.userAgent.indexOf("MSIE") != -1 ) ||
( navigator.userAgent.indexOf("Opera") != -1 )
){
r2 = parseInt(m2[1],16);
g2 = parseInt(m2[2],16);
b2 = parseInt(m2[3],16);
}else{
r2 = parseInt(m2[1]);
g2 = parseInt(m2[2]);
b2 = parseInt(m2[3]);
}
if( r1==r2 && g1==g2 && b1==b2 ){
judge = true;
}
}
return judge;
}
function onSetNetOsdInfo(){
var Cont;
for( var i = 0; i < 8; i++ ){
GetEleId( "netLineTxt" + (i + 1) ).innerHTML = eval( "g_Info.m_infoNetwork.m_Line" + (i + 1) );
Cont = '';
var container = eval( "g_Info.m_infoNetwork.m_Container" + (i + 1) );
if( 'Container' == container ) { Cont = '→'; }
GetEleId( "netLineCont" + (i + 1) ).innerHTML = Cont;
var nobj = GetEleId( "netLineTxt" + (i + 1) );
var TxtColorNew;
var listtextstyleselected = CSTFontColorSelectedText;
var listtextstylenormal = CSTFontColorNormalText;
var listtextclassselected = "zoneCntFrmListSelectedTxt";
var listtextclassnormal = "zoneCntFrmListTxt";
if( 'Unselectable' == container ){
listtextstyleselected = CSTFontColorSelectedTextUnselectable;
listtextstylenormal = CSTFontColorNormalTextUnselectable;
listtextclassselected = "zoneCntFrmListSelectedTxtUnselectable";
listtextclassnormal = "zoneCntFrmListTxtUnselectable";
}
if( ( i + 1 ) == g_Info.m_infoNetwork.m_Pos ) {
nobj.className = listtextclassselected;
GetEleId( "netLineCont" + (i + 1) ).className = "zoneCntFrmListSelectedTxtCont";
TxtColorNew = listtextstyleselected;
} else {
nobj.className = listtextclassnormal;
GetEleId( "netLineCont" + (i + 1) ).className = "zoneCntFrmListTxtCont";
TxtColorNew = listtextstylenormal;
}
if( 'Unselectable' != container ){
if( checkColor(CSTFontColorActiveText,nobj.style.color) == true ){
TxtColorNew = CSTFontColorActiveText;
}
}
nobj.style.color = TxtColorNew;
}
GetEleId("netPageInfoTxt").innerHTML = g_Info.m_infoNetwork.m_Page;
GetEleId("netMenuNameTxt").innerHTML = g_Info.m_infoNetwork.m_MenuName;
}
function onSetNetPlayInfo(){
if( GetEleId("netTitleTxtArtist").innerHTML == "Station" ){
GetEleId("netArtistTxt").innerHTML = g_Info.m_infoNetwork.m_Station;
}else{
GetEleId("netArtistTxt").innerHTML = g_Info.m_infoNetwork.m_Artist;
}
if( g_Info.m_infoNetwork.m_Ch != "" ){
GetEleId("netAlbumTxt").innerHTML = g_Info.m_infoNetwork.m_Ch;
}else{
GetEleId("netAlbumTxt").innerHTML = g_Info.m_infoNetwork.m_Album;
}
if( GetEleId("netTitleTxtSong").innerHTML == "Station" ){
GetEleId("netSongTxt").innerHTML = g_Info.m_infoNetwork.m_Station;
}else{
GetEleId("netSongTxt").innerHTML = g_Info.m_infoNetwork.m_Song;
}
GetEleId("netStatusTxt").innerHTML = g_Info.m_infoNetwork.m_Status;
}
function onSetAirPlayPlayInfo(){
GetEleId("airplayArtistTxt").innerHTML = g_Info.m_infoNetwork.m_Artist;
GetEleId("airplayAlbumTxt").innerHTML = g_Info.m_infoNetwork.m_Album;
GetEleId("airplaySongTxt").innerHTML = g_Info.m_infoNetwork.m_Song;
GetEleId("airplayStatusTxt").innerHTML = g_Info.m_infoNetwork.m_Status;
}
function onSetAnalogTunerInfo()
{
var unit = ['kHz', 'MHz',''];
if( g_Info.m_existTunerRDS == true ) {
GetEleId("rdsProgramTypeTxt").innerHTML = g_Info.m_infoTuner.m_ProgramType;
GetEleId("rdsProgramServiceTxt").innerHTML = g_Info.m_infoTuner.m_ProgramService;
GetEleId("rdsRadioATxt").innerHTML = g_Info.m_infoTuner.m_RadioTextA;
GetEleId("rdsRadioBTxt").innerHTML = g_Info.m_infoTuner.m_RadioTextB;
GetEleId("rdsClockTimeTxt").innerHTML = g_Info.m_infoTuner.m_ClockTime;
GetEleId("tunerRDS").style.display = "";
ChangeTunerBtnRDS(true);
GetEleId("tunerminusbtn").style.top = "-463px";
GetEleId("tunerupbtn").style.top = "-496px";
}
else {
GetEleId("tunerRDS").style.display = "none";
ChangeTunerBtnRDS(false);
GetEleId("tunerminusbtn").style.top = "-529px";
GetEleId("tunerupbtn").style.top = "-562px";
}
onSetTunerBand( g_Info.m_infoTuner.m_band );
onSetTunerFreqText( "tunerFreqTxt", g_Info.m_infoTuner.m_frequency, g_Info.m_infoTuner.m_band );
onSetTunerStereoMono(g_Info.m_infoTuner.m_steMono);
GetEleId("tunerUnitTxt").innerHTML = unit[ g_Info.m_infoTuner.m_band ];
if( GetEleId("tunerradiopreset").options.selectedIndex != g_Info.m_infoTuner.m_radiopreset ){
GetEleId("tunerradiopreset").options.selectedIndex = g_Info.m_infoTuner.m_radiopreset;
}
if( g_Info.m_infoTuner.m_band == 0 ){
if( GetEleId("numberKeypadAnalogAm").style.display != "" ){
GetEleId("numberKeypadAnalogAm").style.display = "";
GetEleId("numberKeypadAnalogFm").style.display = "none";
onBtnNumKeyPadTuner(-2);
}
}else{
if( GetEleId("numberKeypadAnalogFm").style.display != "" ){
GetEleId("numberKeypadAnalogAm").style.display = "none";
GetEleId("numberKeypadAnalogFm").style.display = "";
if( g_Info.m_infoTuner.m_fmstepfreq == 0.05 ){
GetEleId("numberKeyValueTunerAnalogFm5").style.display = "";
}else{
GetEleId("numberKeyValueTunerAnalogFm5").style.display = "none";
}
onBtnNumKeyPadTuner(-2);
}
}
}
function onSetHdradioInfo(){
GetEleId("hdrStationNameTxt").innerHTML = g_Info.m_infoHdradio.m_StationName;
if( g_Info.m_infoHdradio.m_program < 0 ){
GetEleId("hdrProgramNameTxt").innerHTML = '';
}else{
GetEleId("hdrProgramNameTxt").innerHTML = 'HD' + (g_Info.m_infoHdradio.m_program + 1);
}
GetEleId("hdrProgramTypeTxt").innerHTML = g_Info.m_infoHdradio.m_ProgramType;
GetEleId("hdrTitleNameTxt").innerHTML = g_Info.m_infoHdradio.m_Title;
GetEleId("hdrArtistTxt").innerHTML = g_Info.m_infoHdradio.m_Artist;
GetEleId("hdrCommentTxt").innerHTML = g_Info.m_infoHdradio.m_Comment;
var unit = ['kHz', 'MHz',''];
onSetTunerFreqText( "hdrFreqTxt", g_Info.m_infoHdradio.m_frequency, g_Info.m_infoHdradio.m_band );
GetEleId("hdrUnitTxt").innerHTML = unit[g_Info.m_infoHdradio.m_unit];
onSetHdBand(g_Info.m_infoHdradio.m_band);
onSetHdStereoMono(g_Info.m_infoHdradio.m_steMono);
if( g_Info.m_infoHdradio.m_band == 0 ){
if( GetEleId("numberKeypadHdAm").style.display != "" ){
GetEleId("numberKeypadHdAm").style.display = "";
GetEleId("numberKeypadHdFm").style.display = "none";
onBtnNumKeyPadTunerHd(-2);
}
}else{
if( GetEleId("numberKeypadHdFm").style.display != "" ){
GetEleId("numberKeypadHdAm").style.display = "none";
GetEleId("numberKeypadHdFm").style.display = "";
if( g_Info.m_infoTuner.m_fmstepfreq == 0.05 ){
GetEleId("numberKeyValueTunerHdFm5").style.display = "";
}else{
GetEleId("numberKeyValueTunerHdFm5").style.display = "none";
}
onBtnNumKeyPadTunerHd(-2);
}
}
if( GetEleId("hdrselectprg").options.selectedIndex != g_Info.m_infoHdradio.m_program ){
GetEleId("hdrselectprg").options.selectedIndex = g_Info.m_infoHdradio.m_program;
}
if( GetEleId("hdrselectch").options.selectedIndex != g_Info.m_infoHdradio.m_radiopreset ){
GetEleId("hdrselectch").options.selectedIndex = g_Info.m_infoHdradio.m_radiopreset;
}
for( var I=0 ; I<8 ; I++ )
{
if( g_Info.m_infoHdradio.m_ProgValid[I] == true ) { GetEleId("hdrselectprg").options[I].text = "HD" + (I+1); }
else { GetEleId("hdrselectprg").options[I].text = "---"; }
}
}
function onSetTunerFreqText( objName, FreqNum, band ){
if(
( isNaN(FreqNum) == true )
){
var udStatus = GetEleId(objName).innerHTML;
if( FreqNum.indexOf("Up" ) >= 0 ){
if( udStatus != ">>>" ){
udStatus = ">>>";
}else{
}
}else{
if( udStatus != "<<<" ){
udStatus = "<<<";
}else{
}
}
GetEleId(objName).innerHTML = udStatus;
}else{
if( band == 0 ){
GetEleId(objName).innerHTML = FreqNum;
}else{
var temp = "";
temp += FreqNum;
if( temp.split(".").length == 1 ){
GetEleId(objName).innerHTML = FreqNum + ".0";
}else{
GetEleId(objName).innerHTML = FreqNum;
}
}
}
}
function onSetTunerInfo(){
var lTunerType;
lTunerType = g_Info.GetTunerType();
if( lTunerType == CSTtunerTypeAnalog ) { onSetAnalogTunerInfo(); }
else if( lTunerType == CSTtunerTypeHD ) { onSetHdradioInfo(); }
}
function onSetiPodOsdInfo(){
var Cont;
for( var i = 0; i < 8; i++ ){
GetEleId( "dockLineTxt" + (i + 1) ).innerHTML = eval( "g_Info.m_infoiPod.m_Line" + (i + 1) );
Cont = '';
if( 'Container' == eval( "g_Info.m_infoiPod.m_Container" + (i + 1) ) ) { Cont = '→'; }
GetEleId( "dockLineCont" + (i + 1) ).innerHTML = Cont;
var dobj = GetEleId( "dockLineTxt" + (i + 1) );
var TxtColorNew;
if( ( i + 1 ) == g_Info.m_infoiPod.m_Pos ) {
dobj.className = "zoneCntFrmListSelectedTxt";
GetEleId( "dockLineCont" + (i + 1) ).className = "zoneCntFrmListSelectedTxtCont";
TxtColorNew = CSTFontColorSelectedText;
} else {
dobj.className = "zoneCntFrmListTxt";
GetEleId( "dockLineCont" + (i + 1) ).className = "zoneCntFrmListTxtCont";
TxtColorNew = CSTFontColorNormalText;
}
if( checkColor(CSTFontColorActiveText,dobj.style.color) == true ){
TxtColorNew = CSTFontColorActiveText;
}
dobj.style.color = TxtColorNew;
}
GetEleId("dockPageInfoTxt").innerHTML = g_Info.m_infoiPod.m_Page;
GetEleId("dockMenuNameTxt").innerHTML = g_Info.m_infoiPod.m_MenuName;
}
function onSetiPodPlayInfo(){
GetEleId("dockSongTxt").innerHTML = g_Info.m_infoiPod.m_Song;
GetEleId("dockArtistTxt").innerHTML = g_Info.m_infoiPod.m_Artist;
GetEleId("dockAlbumTxt").innerHTML = g_Info.m_infoiPod.m_Album;
if( g_Info.m_infoiPod.m_Control == 'Normal' ) {
GetEleId("dockStatusTxt").innerHTML = 'Simple Mode';
}
else {
GetEleId("dockStatusTxt").innerHTML = g_Info.m_infoiPod.m_Status;
}
}
function onSetIpodMode( value ){
if( onSetIpodModeImageObj( value ).style.top == "-91px" )return;
onSetIpodModeImageObj( g_Info.m_infoiPod.m_Mode ).style.top = "-105px";
g_Info.m_infoiPod.m_Mode = value;
onSetIpodModeImageObj( value ).style.top = "-91px";
}
function onSetIpodModeImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("ipodmodesimple"); break;
case 1: obj = GetEleId("ipodmodebrowse"); break;
}
return obj;
}
function onClickvTunerLink(){
var newAddr = 'http://yradio.vtuner.com/';
window.open( newAddr );
}
function onClickOpenCreatedLink(){
var address = location.href.split(".html");
var newAddr;
if( address.length > 1 ){
newAddr = address[0] + ".html";
}else{
newAddr = address[0] + "index.html";
}
var parameters = [];
if( document.createLink.createlinkcheck[0].checked == true){
parameters.push( "topmenu=0" );
}
if( document.createLink.createlinkcheck[1].checked == true){
var index = GetEleId("createlinkzoneitems").options.selectedIndex;
parameters.push( "zone="+(index+1) );
}
if( document.createLink.createlinkcheck[2].checked == true){
parameters.push( "settings=0" );
}
if( document.createLink.createlinkcheck[3].checked == true){
parameters.push( "reload=0" );
}
if( document.createLink.createlinkcheck[4].checked == true){
var index = GetEleId("createlinkiphoneitems").options.selectedIndex;
parameters.push( "iphone="+index );
}
if( parameters.length > 0 ){
newAddr += "?";
newAddr += parameters[0];
for( var i = 1; i < parameters.length; i++ ){
newAddr += "&" + parameters[i];
}
window.open( newAddr );
}else{
alert("Please check one of the settings.");
}
}
function onSetiPodRepeat( value ){
GetiPodRepeatImageObj( g_Info.m_infoiPod.m_repeat ).style.top = "-105px";
g_Info.m_infoiPod.m_repeat = value;
GetiPodRepeatImageObj( value ).style.top = "-91px";
}
function GetiPodRepeatImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("radioIpodRptOff"); break;
case 1: obj = GetEleId("radioIpodRptAll"); break;
case 2: obj = GetEleId("radioIpodRptSgl"); break;
}
return obj;
}
function onSetiPodShuffle( value ){
GetiPodShuffleImageObj( g_Info.m_infoiPod.m_shuffle ).style.top = "-105px";
g_Info.m_infoiPod.m_shuffle = value;
GetiPodShuffleImageObj( value ).style.top = "-91px";
}
function GetiPodShuffleImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("radioIpodSflOff"); break;
case 1: obj = GetEleId("radioIpodSflSong"); break;
case 2: obj = GetEleId("radioIpodSflAlbum");break;
}
return obj;
}
function onSetTunerBand( value ){
var i;
var bColor;
if( g_Info.m_existTunerRDS || g_Info.m_existHD ){
bColor = true;
}else{
bColor = false;
}
for( i=0 ; i<2 ; i++ )
{ GetTunerBandImageObj(i).style.top = GetbtnPx(bColor,false); }
g_Info.m_infoTuner.m_band = value;
GetTunerBandImageObj(value).style.top = GetbtnPx(bColor,true);
}
function GetTunerBandImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("tuneramimg"); break;
case 1: obj = GetEleId("tunerfmimg"); break;
}
return obj;
}
function GetTunerSrchImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("tunerautoimg"); break;
case 1: obj = GetEleId("tunermanimg"); break;
}
return obj;
}
function onSetTunerStereoMono( value ){
if( GetTunerStereoMonoImageObj( value ).style.top == "-435px" )return;
GetTunerStereoMonoImageObj( g_Info.m_infoTuner.m_steMono ).style.top = "-449px";
g_Info.m_infoTuner.m_steMono = value;
GetTunerStereoMonoImageObj( value ).style.top = "-435px";
}
function GetTunerStereoMonoImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("tunerstereoimg"); break;
case 1: obj = GetEleId("tunermonoimg"); break;
}
return obj;
}
function onSetTunerPreset( index ){
g_Info.m_infoTuner.m_radiopreset = index;
}
function onSetHdBand( value ){
if( GetHdBandImageObj( value ).style.top == "-407px" )return;
GetHdBandImageObj( g_Info.m_infoHdradio.m_band ).style.top = "-421px";
g_Info.m_infoHdradio.m_band = value;
GetHdBandImageObj( value ).style.top = "-407px";
}
function GetHdBandImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("hdamimg"); break;
case 1: obj = GetEleId("hdfmimg"); break;
}
return obj;
}
function onSetHdStereoMono( value ){
if( GetHdStereoMonoImageObj( value ).style.top == "-435px" )return;
GetHdStereoMonoImageObj( g_Info.m_infoHdradio.m_steMono ).style.top = "-449px";
g_Info.m_infoHdradio.m_steMono = value;
GetHdStereoMonoImageObj( value ).style.top = "-435px";
}
function GetHdStereoMonoImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("hdstereoimg"); break;
case 1: obj = GetEleId("hdmonoimg"); break;
}
return obj;
}
function onSetHdPreset( index ){
g_Info.m_infoHdradio.m_radiopreset = index;
}
function onSetHdProgram( index ){
g_Info.m_infoHdradio.m_program = index;
}
function onSetNetRepeat( value ){
GetNetRepeatImageObj( g_Info.m_infoNetwork.m_repeat ).style.top = "-105px";
g_Info.m_infoNetwork.m_repeat = value;
GetNetRepeatImageObj( value ).style.top = "-91px";
}
function onSetNetThumbUpDown(value){
switch(value)
{
case 'Up':
GetThumbUpDownImageObj('Up').style.top = "-91px";
GetThumbUpDownImageObj('Down').style.top = "-105px";
break;
case 'Down':
GetThumbUpDownImageObj('Up').style.top = "-105px";
GetThumbUpDownImageObj('Down').style.top = "-91px";
break;
default:
GetThumbUpDownImageObj('Up').style.top = "-105px";
GetThumbUpDownImageObj('Down').style.top = "-105px";
break;
}
}
function GetThumbUpDownImageObj( value ){
var obj;
switch(value)
{
case 'Up': obj = GetEleId("netThumbUpBtn"); break;
default: obj = GetEleId("netThumbDownBtn"); break;
}
return obj;
}
function GetNetRepeatImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("radioNetRptOff"); break;
case 1: obj = GetEleId("radioNetRptAll"); break;
case 2: obj = GetEleId("radioNetRptSgl"); break;
}
return obj;
}
function onSetNetShuffle( value ){
GetNetShuffleImageObj( g_Info.m_infoNetwork.m_shuffle ).style.top = "-105px";
g_Info.m_infoNetwork.m_shuffle = value;
GetNetShuffleImageObj( value ).style.top = "-91px";
}
function GetNetShuffleImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("radioNetSflOff"); break;
case 1: obj = GetEleId("radioNetSflOn"); break;
}
return obj;
}
function onSetNetBookmark( value ){
GetNetBookmarkImageObj( g_Info.m_infoNetwork.m_bookmark ).style.top = "-105px";
g_Info.m_infoNetwork.m_bookmark = value;
GetNetBookmarkImageObj( value ).style.top = "-91px";
}
function GetNetBookmarkImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("radioNetBookOff"); break;
case 1: obj = GetEleId("radioNetBookOn"); break;
}
return obj;
}
function onSetTopVolStep( value ){
if( value == 0 ){
GetTopVolStepImageObj( 0 ).style.top = "-457px";
GetTopVolStepImageObj( 1 ).style.top = "-471px";
}else{
GetTopVolStepImageObj( 0 ).style.top = "-471px";
GetTopVolStepImageObj( 1 ).style.top = "-457px";
}
}
function GetTopVolStepImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("topstep05"); break;
case 1: obj = GetEleId("topstep50"); break;
}
return obj;
}
function GetTopVolStepValue(){
if( GetTopVolStepImageObj( 0 ).style.top == "-457px" ){
return 0;
}else{
return 1;
}
}
function onSetZoneVolStep( value ){
if( value == 0 ){
GetZoneVolStepImageObj( 0 ).style.top = "-457px";
GetZoneVolStepImageObj( 1 ).style.top = "-471px";
}else{
GetZoneVolStepImageObj( 0 ).style.top = "-471px";
GetZoneVolStepImageObj( 1 ).style.top = "-457px";
}
}
function GetZoneVolStepImageObj( value ){
var obj;
switch( value ){
case 0: obj = GetEleId("zonestep05"); break;
case 1: obj = GetEleId("zonestep50"); break;
}
return obj;
}
function GetZoneVolStepValue(){
if( GetZoneVolStepImageObj( 0 ).style.top == "-457px" ){
return 0;
}else{
return 1;
}
}
function zonepwrmouse( obj, id, OnOffDivId ){
if( g_Info.m_info[ g_Zone ].m_OnOff == OnOffDivId )return;
imageswapnew( obj, id );
}
function onSetNetPreset( index ){
var obj;
obj = document.getElementById("tnetpreset");
if( index != 0 ){
timerAfterCmd( "resetNetPreset", 3000 );
}
obj.selectedIndex = index;
g_Info.m_infoNetwork.m_preset = index;
}
function resetNetPreset(){
onSetNetPreset( 0 );
}
function imageswapnew( obj, value ){
var img = obj.getElementsByTagName("img");
var obj2 = img[0];
if( ( g_IsiPhone == 1 )||( g_IsAndroid==1 ) ){
return;
}
obj2.style.left = value + "px";
if( value == 1 ){
obj2.style.left = (-obj.clientWidth) + "px";
}else{
obj2.style.left = 0 + "px";
}
}
function allpwronoff( value ){
var l_OnOff = 3;
if( value == 1 )l_OnOff = 4;
pwrmousetopmenu( GetEleId("power0"), value );
pwrmousetopmenu( GetEleId("power1"), value );
pwrmousetopmenu( GetEleId("power2"), value );
pwrmousetopmenu( GetEleId("power3"), value );
for( var i = 0; i < g_Info.GetMaxZoneNum() ; i++ ){
g_Info.m_onZonePowerOnOff( i, l_OnOff - 3 );
}
}
function setMuteImg( l_OnOff ){
var obj2;
if( g_Zone == -1 ){
obj2 = document.getElementById("topmuteimg");
if( l_OnOff ){
obj2.style.top = "0px";
}else{
obj2.style.top = "-172px";
}
}else{
obj2 = document.getElementById("zonemuteimg");
if( l_OnOff ){
obj2.style.top = "0px";
}else{
obj2.style.top = "-172px";
}
}
}
var volmin = -80.5;
var volmax = 16.5;
function setVolumeMeter( obj, value ){
var value1 = value - volmin;
var pos = -183 * ( ( ( volmax - volmin ) - value1 ) / ( volmax - volmin ) );
var remain = pos % 5;
pos -= remain;
pos -= 3;
if( pos == -183 ){
if( value > volmin ){
pos = ( -183 + 5 );
}
}
obj.style.left = pos + "px";
}
function setVertVolumeMeter( obj, value ){
var value1 = value - volmin;
var pos = -2 -133 * ( ( value1 ) / ( volmax - volmin ) );
var remain = pos % 5;
pos -= remain;
if( pos == 0 ){
if( value > volmin ){
pos = -5;
}
}
pos -= 5;
if( obj.style.top != ( pos + "px" ) ){
obj.style.top = pos + "px";
}
}
function setVolumeTxt( obj, value, mute, offDisplay , fixed ){
var valuetext;
if( fixed == true ){
valuetext = 'Fixed';
}else{
if( value == volmin ){
valuetext = " --.-dB";
}else{
valuetext = value + 'dB';
if( valuetext.indexOf(".") == -1 ){
valuetext = value + '.0dB';
}
}
}
if( mute ) {
valuetext = 'Mute ON';
}
else {
if( offDisplay ) { valuetext = '---'; }
}
if( obj.innerHTML )obj.innerHTML = valuetext;
obj.value = valuetext;
}
function setVolume( zone, value, mute , fixed ){
var objtxtname = "voltxt" + zone;
var objtxt = GetEleId( objtxtname );
var offDisplay = false;
if( zone == CSTzone4Index ) { offDisplay = true; }
setVolumeTxt( objtxt, value, mute, offDisplay , fixed );
var objmetername = "meteri" + zone;
var objmeter = GetEleId( objmetername );
setVolumeMeter( objmeter, value );
}
function setVertVolume( zone, value, mute , fixed ){
var objtxtname;
var objmetername;
if( zone == -1 ){
objtxtname = "vol_txtv";
objmetername = "_metervi";
}else{
objtxtname = "_volverttxt";
objmetername = "_meterverti";
}
var objtxt = GetEleId( objtxtname );
var offDisplay = false;
if( zone == CSTzone4Index ) { offDisplay = true; }
setVolumeTxt( objtxt, value, mute, offDisplay , fixed );
var objmeter = GetEleId( objmetername );
setVertVolumeMeter( objmeter, value );
}
function setZoneVertVolume( zone, value, mute, fixed ){
var objtxtname = "_volverttxt";
var objtxt = GetEleId( objtxtname );
var offDisplay = false;
if( zone == CSTzone4Index ) { offDisplay = true; }
setVolumeTxt( objtxt, value, mute, offDisplay , fixed );
var objmetername = "_meterverti";
var objmeter = GetEleId( objmetername );
setVertVolumeMeter( objmeter, value );
g_Info.m_setVolume( zone, value );
ajxSetVolumeLvlNum( zone, value );
}
function onVertVolumeUpDown( updown, volstep ){
if( g_Zone == -1 ){
if( g_Info.m_partyMode == 1 ){
if( updown == 1 ){
onBtnAllZoneVolumeUp();
}else{
onBtnAllZoneVolumeDown();
}
}else{
setVolumeUpDown( 0, updown, volstep );
}
}else{
setZoneVertVolumeUpDown( g_Zone, updown, volstep );
}
}
function setVolumeUpDown( zone, updown, volstep ){
var lVolume;
if( zone == -1 ) { lVolume = g_Info.m_info[0].m_volume; }
else { lVolume = g_Info.m_info[zone].m_volume; }
if( isNaN( lVolume ) ) { lVolume = volmin; }
if( updown == 0 ){
lVolume -= volstep;
if( lVolume < volmin )lVolume = volmin;
}else{
if( lVolume == volmin ) {
lVolume = volmin + 0.5;
}
else {
lVolume += volstep;
if( lVolume > volmax )lVolume = volmax;
}
}
if( zone == -1 ){
setVertVolume( zone, lVolume, g_Info.m_info[0].m_mute , g_Info.m_info[0].m_fixed );
}else{
setVolume( zone, lVolume, g_Info.m_info[zone].m_mute , g_Info.m_info[zone].m_fixed );
g_Info.m_setVolume( 0, lVolume );
ajxSetVolumeLvlNum( zone, lVolume );
}
}
function setZoneVertVolumeUpDown( zone, updown, volstep ){
var lVolume;
if( zone == -1 ) { lVolume = g_Info.m_info[0].m_volume; }
else { lVolume = g_Info.m_info[zone].m_volume; }
if( isNaN( lVolume ) ) { lVolume = volmin; }
if( updown == 0 ){
lVolume -= volstep;
if( lVolume < volmin )lVolume = volmin;
}else{
if( lVolume == volmin ) {
lVolume = volmin + 0.5;
}
else {
lVolume += volstep;
if( lVolume > volmax )lVolume = volmax;
}
}
setZoneVertVolume( zone, lVolume, g_Info.m_info[zone].m_mute, g_Info.m_info[zone].m_fixed );
}

function checkParameter()
{
  var parmeter = location.href.split( "?" )[1];

  if( parmeter )
  {
    var parm = parmeter.split( "&" );

    for( var i = 0; i < parm.length; i++ )
    {
      var item = parm[i].split("=");

      if( item[0] == "zone" )
      {
        g_Zone = parseInt( item[1] );
        if( isNaN( g_Zone ))
        {
          g_Zone = -1;
        }

        if( g_Zone > g_Info.GetMaxZoneNum() )
        {
          g_Zone = -1;
        }
        else if( g_Zone < 1 )
        {
          g_Zone = -1;
        }
        else
        {
          g_Zone = g_Zone - 1;
        }
      }

      if( item[0] == "input" ){
  g_Input = parseInt( item[1] );
  if( isNaN( g_Input ) )g_Input = 0;
  if( g_Input > g_inputName.length )g_Input = 0;
  if( g_Input < 0 )g_Input = 0;
  }
  if( item[0] == "topmenu" ){
  g_TopMenu = parseInt( item[1] );
  if( isNaN( g_TopMenu ) )g_TopMenu = 1;
  if( g_TopMenu != 0 )g_TopMenu = 1;
  }
  if( item[0] == "reload" ){
  g_reload = parseInt( item[1] );
  if( isNaN( g_reload ) )g_reload = 1;
  if( g_reload != 0 )g_reload = 1;
  }
  if( item[0] == "settings" ){
  g_settings = parseInt( item[1] );
  if( isNaN( g_settings ) )g_settings = 1;
  if( g_settings != 0 )g_settings = 1;
  }
  if( item[0] == "iphone" ){
  g_iPhone = parseInt( item[1] );
  if( isNaN( g_iPhone ) )g_iPhone = 0;
  if( g_iPhone > 3 )g_iPhone = 0;
  if( g_iPhone < 0 )g_iPhone = 0;
  }
  }
  }else{
  g_Zone = -1;
  g_Input = 0;
  }
  var b=navigator.userAgent.toUpperCase();
  if ( (navigator.userAgent.indexOf('Mobile') != -1 ) &&
  (navigator.userAgent.indexOf('Safari') != -1 ) )
  {
  g_Animation = 0;
  g_IsiPhone = 1;
  g_reloadTime = 10000;
  if(navigator.userAgent.indexOf('iPad') != -1 ){
  g_IsiPad=1;
  g_iPhone = 3;
  GetEleId("iPhoneRadio4").checked = true;
  }
  oniPhoneApply( 3 );
  }
  if( navigator.userAgent.indexOf('Android') != -1 )
  {
  g_IsAndroid = 1;
  oniPhoneApply( 3 );
  }
  if( navigator.userAgent.indexOf('MSIE') != -1 )
  {
  g_IsIE = 1;
  }
  if (navigator.userAgent.indexOf("Firefox") != -1){
  g_IsFF = 1;
  }
}

function getVersionOfIE()
{
var ua = navigator.userAgent;
var nVersion = "";
var nIndex;
nIndex = ua.indexOf("MSIE");
if ( nIndex >= 0) {
nVersion = ua.substr(nIndex+5, 3);
}
return nVersion;
}
function setDisplaySourceFrame(id, noFade ){
var b=navigator.appName.toUpperCase();
if( ( b.indexOf("EXPLORER") >= 0 ) || ( g_Animation == 0 ) ){
if( g_SrcFrmObj[id].style.display == "" )return;
for( var i = 0; i < g_SrcFrmObj.length; i++ ){
if( i == id ){
g_SrcFrmObj[i].style.display = "";
}else{
g_SrcFrmObj[i].style.display = "none";
}
}
}else{
if( ( noFade ) && ( g_opacitySrc <= 0.0 ) ){
var tempIsFade = 1;
for( var i = 0; i < g_SrcFrmObj.length; i++ ){
if( i == id ){
g_SrcFrmObj[i].style.display = "";
}else{
g_SrcFrmObj[i].style.display = "none";
}
}
}else{
if( g_opacitySrc > 0.0 ){
clearTimeout( g_timerSrc );
var prevFadeInFrame = g_fadeInFrameSrc;
var prevFadeOutFrame = g_fadeOutFrameSrc;
var newFadeInFrame = g_fadeInFrameSrc;
for( var i = 0; i < g_SrcFrmObj.length; i++ ){
if( i == id ){
newFadeInFrame = g_SrcFrmObj[i];
}
}
prevFadeOutFrame.style.display = "none";
g_fadeOutFrameSrc = prevFadeInFrame;
g_fadeInFrameSrc = newFadeInFrame;
if( g_fadeInFrameSrc == g_fadeOutFrameSrc ){
g_fadeInFrameSrc.style.display = "";
}else{
g_fadeOutFrameSrc.style.zIndex = 100;
g_fadeInFrameSrc.style.zIndex = 10;
g_fadeOutFrameSrc.style.display = "";
g_fadeInFrameSrc.style.display = "";
g_timerSrc = setTimeout("SourceFrameFade();",1);
}
}else{
for( var i = 0; i < g_SrcFrmObj.length; i++ ){
if( g_SrcFrmObj[i].style.display == "" ){
g_fadeOutFrameSrc = g_SrcFrmObj[i];
}
if( i == id ){
g_fadeInFrameSrc = g_SrcFrmObj[i];
}
}
if( g_fadeInFrameSrc == g_fadeOutFrameSrc ){
g_fadeInFrameSrc.style.display = "";
}else{
g_opacitySrc = 1.0;
g_fadeOutFrameSrc.style.zIndex = 100;
g_fadeInFrameSrc.style.zIndex = 10;
g_fadeOutFrameSrc.style.display = "";
g_fadeInFrameSrc.style.display = "";
g_timerSrc = setTimeout("SourceFrameFade();",1);
}
}
}
}
}
function setZoneSelectInputNum( index ){
var i;
var l_obj;
if(g_inputName[index] == g_iPodUsbName){
index = gInput2IdxForAll[g_UsbName];
}
l_obj = GetEleId("zoneselectinputid");
for( i=0 ; i<l_obj.length ; i++ )
{
if( l_obj.options[i].value == index ) {
l_obj.options.selectedIndex = i;
break;
}
}
}
function setSelectSurround( index ){
var i;
var l_Obj;
l_Obj = GetEleId("selectsurroundsel");
if( getVersionOfIE() =="9.0" ){
for( i=0 ; i<l_Obj.length ; i++ )
{
if( l_Obj[i].value == index ) {
l_Obj.selectedIndex = i;
break;
}
}
}else{
for( i=0 ; i<l_Obj.length ; i++ )
{
if( l_Obj.options[i].value == index ) {
l_Obj.selectedIndex = i;
break;
}
}
}
}

function setSurroundSelectDisplay( l_OnOff )
{
  if( l_OnOff == 1 )
  {
    setSelectSurround( g_Info.m_info[ 0 ].m_surround );
    GetEleId("selectsurrounddiv").style.display = "";
    GetEleId("selectsurroundsel").style.display = "";
    GetEleId("inputmenuenhancerradio").style.display = "";
    GetEleId("inputmenuenhancerradio").style.visibility = "visible";
  }
  else
  {
    GetEleId("selectsurrounddiv").style.display = "none";
    GetEleId("selectsurroundsel").style.display = "none";
    GetEleId("inputmenuenhancerradio").style.display = "none";
    GetEleId("inputmenuenhancerradio").style.visibility = "hidden";
  }
}

function setSystemMemoryDisplay( l_zone ){
if( l_zone == 0 ){
GetEleId("divmainmemory").style.display = "";
GetEleId("divzonememory").style.display = "none";
}else{
GetEleId("divmainmemory").style.display = "none";
GetEleId("divzonememory").style.display = "";
}
}
function setInputSelect( l_zone , forced ){
var iname;
var iidx;
if( forced != true ){
if( g_Info.m_inputSet == l_zone )return;
}
var l_obj = GetEleId("zoneselectinputid");
l_obj.length = 0;
for( var i = 0; i < g_inputName.length; i++ ){
switch(l_zone){
case 0:
if( g_Info.blnModelTypeHigh() == true ){
iidx = gInput2IdxForMainOfHigh[g_inputName[i]];
}else{
iidx = gInput2IdxForMainOfLow[g_inputName[i]];
if( g_Info.blnModelType820() == true ){
}else{
if( ( g_inputName[i] == g_Hdmi6Name ) || ( g_inputName[i] == g_Hdmi7Name ) ){
iidx = cgInputNoneIdx;
}
}
}
break;
case 1:
if( g_Info.blnModelType3073() == true ){
iidx = gInput2IdxForZone2_OfHighWithHDMI[g_inputName[i]];
break;
}
case 2:
if( g_Info.blnModelTypeHigh() == true ){
iidx = gInput2IdxForZone2_3OfHigh[g_inputName[i]];
}else{
iidx = gInput2IdxForZone2OfLow[g_inputName[i]];
if( g_Info.blnModelType820() == true ){
}else{
if( g_inputName[i] == g_VauxName ){
iidx = cgInputNoneIdx;
}
}
}
break;
case 3:
iidx = gInput2IdxForZone4[g_inputName[i]];
if(
( iidx != cgInputNoneIdx )&&
( g_Info.m_Zone4InputName[0] != "" )
){
var item_exist = false;
for (var j=0; j<g_Info.m_Zone4InputNum ; j++) {
if( g_Info.m_Zone4InputName[j] == g_inputName[i] ){
item_exist = true;
}
}
if( item_exist == false ){
iidx = cgInputNoneIdx;
}
}
break;
default:
iidx=cgInputNoneIdx;
break;
}
if( iidx == cgInputNoneIdx ){
continue;
}
if( g_inputName[i] == g_RhapsodyName ) {
if( g_Info.blnExistRhapsody() == false ) { continue; }
}
if( g_inputName[i] == g_SiriusIRName ) {
if( g_Info.blnExistSiriusIR() == false ) { continue; }
}
if( g_inputName[i] == g_UsbNetName ) { continue; }
if( g_inputName[i] == g_PandoraName ) {
if( g_Info.blnExistPandora() == false ) { continue; }
}
if( g_inputName[i] == g_iPodUsbName ) { continue; }
if( g_inputName[i] == g_PhonoName ){
if( g_Info.blnIsExistPhono() == false ){
continue;
}
}
iname = g_inputName[i];
var l_id = l_obj.length;
l_obj.length++;
l_obj.options[ l_id ].value = i;
l_obj.options[ l_id ].text = " " + iname;
}
g_Info.m_inputSet = l_zone;
}
function setSystemMemory( l_zone ){
var l_objDiv = GetEleId("divzonememory");
var l_objImg = l_objDiv.getElementsByTagName("img");
var newCode = [];
var posY = -691 - ( l_zone * 40 );
for( var i = 0; i < l_objImg.length; i++ ){
var value = posY +"px";
l_objImg[i].style.top = value;
eval("l_objImg[i].parentNode.onclick = function(){onBtnSystemMemory("+"l_zone,"+i+");}");
}
}
function mainSystemMemoryScroll( dir ){
var obj = GetEleId("systemmemoryinterdiv");
var leftpos = obj.style.left.split("px")[0] * 1;
if( dir > 0 ){
if( leftpos <= -(94+282) )return;
leftpos -= 47;
}else{
if( leftpos >= 0 )return;
leftpos += 47;
}
obj.style.left = leftpos + "px";
}
function setTopMenuParameter(){
var iname;
ValidSubframeBlock();
for( var i = 0;i < g_Info.GetMaxZoneNum() ; i++ ){
pwrmousetopmenu( GetEleId("power"+i), g_Info.m_info[i].m_OnOff );
iname = g_inputName[ g_Info.m_info[i].m_input ];
if( g_Info.m_partyMode == 1 ){
switch(i){
case 0:
break;
case 1:
if( g_Info.m_partyModeTargetZone2 == true ){
iname = g_PartyName;
}
break;
case 2:
if( g_Info.m_partyModeTargetZone3 == true ){
iname = g_PartyName;
}
break;
case 3:
if( g_Info.m_partyModeTargetZone4 == true ){
iname = g_PartyName;
}
break;
default:
break;
}
}
GetEleId("topinputtxt"+i).value = iname;
GetEleId("topinputtxt"+i).innerHTML = iname;
setVolume( i, g_Info.m_info[i].m_volume, g_Info.m_info[i].m_mute , g_Info.m_info[i].m_fixed );
}
if( g_Info.m_partyMode == 1 ){
if( GetEleId("partymodeontxt").style.display != "" ){
GetEleId("topmenuvolumetxt").innerHTML = "ALL ZONE VOLUME";
GetEleId("meterv").style.display = "none";
GetEleId("vol_txtv").style.display = "none";
GetEleId("partymodeontxt").style.display = "";
GetEleId("topmenustepradio").style.display = "none";
}
}else{
if( GetEleId("partymodeontxt").style.display != "none" ){
GetEleId("topmenuvolumetxt").innerHTML = "MAIN VOLUME";
GetEleId("meterv").style.display = "";
GetEleId("vol_txtv").style.display = "";
GetEleId("partymodeontxt").style.display = "none";
GetEleId("topmenustepradio").style.display = "";
}
}
if( g_Info.m_info[CSTzone2Index].m_fixed == true ){
GetEleId("zone2volmeter").className = "meterouteropa"
}else{
GetEleId("zone2volmeter").className = "meterouter"
}
if( g_Info.m_info[CSTzone3Index].m_fixed == true ){
GetEleId("zone3volmeter").className = "meterouteropa"
}else{
GetEleId("zone3volmeter").className = "meterouter"
}
setVertVolume(g_Zone, g_Info.m_info[ 0 ].m_volume, g_Info.m_info[0].m_mute , g_Info.m_info[0].m_fixed );
setMuteImg( g_Info.m_info[ 0 ].m_mute );
DispZoneRename();
setZonePowerOffMask( 0 );
if( ( g_Info.m_info[ 0 ].m_OnOff ) || ( g_Info.m_partyMode == 1 ) ){
setTopPowerOffMask( 0 );
}else{
setTopPowerOffMask( 1 );
}
}
function setZoneParameter(){
ValidVolVertUpDown(g_Zone);
setVertVolume(g_Zone, g_Info.m_info[ g_Zone ].m_volume, g_Info.m_info[g_Zone].m_mute, g_Info.m_info[g_Zone].m_fixed );
onSetInput( g_Info.m_info[ g_Zone ].m_input, true );
onSetSleep( g_Info.m_info[ g_Zone ].m_sleep );
onSetZonePower( g_Info.m_info[ g_Zone ].m_OnOff );
if( g_Info.m_info[ g_Zone ].m_OnOff ){
setZonePowerOffMask( 0 );
}else{
setZonePowerOffMask( 1 );
}
setMuteImg( g_Info.m_info[ g_Zone ].m_mute );
if( g_Info.m_info[ g_Zone ].m_zoneName != g_aDefaultZoneName[ g_Zone ] ){
GetEleId("zonename").innerHTML = g_Info.m_info[ g_Zone ].m_zoneName;
}else{
GetEleId("zonename").innerHTML = "";
}
var display_status = true;
var t_obj = GetEleId("zoneselectinputtitle");
var l_obj = GetEleId("zoneselectinputid");
if( g_Info.m_partyMode == 1 ){
switch(g_Zone){
case 0:
break;
case 1:
if( g_Info.m_partyModeTargetZone2 == true ){
display_status = false;
}
break;
case 2:
if( g_Info.m_partyModeTargetZone3 == true ){
display_status = false;
}
break;
case 3:
if( g_Info.m_partyModeTargetZone4 == true ){
display_status = false;
}
break;
default:
break;
}
}
if( display_status == true ){
l_obj.style.display = "";
t_obj.innerHTML = "INPUT";
}else{
l_obj.style.display = "none";
t_obj.innerHTML = "PARTY";
setZonePowerOffMask( 1 );
GetEleId("divpoweroffmaskVolume").style.display = "none";
}
}
function onBtnNumKeyPadTuner( num ){
TunerNumKeyPadProc( num, 0 );
}
function onBtnNumKeyPadTunerHd( num ){
TunerNumKeyPadProc( num, 1 );
}
function TunerNumKeyPadProc( num, tunerType ){
var curValue = [ "", "", "", "", "" ];
var tunerinfoObj;
if( tunerType == 0 ){
tunerinfoObj = g_Info.m_infoTuner;
}else{
tunerinfoObj = g_Info.m_infoHdradio;
}
var divNameArrayDigit = [ "numberKeyValueTunerAnalogAm", "numberKeyValueTunerAnalogFm", "numberKeyValueTunerHdAm", "numberKeyValueTunerHdFm" ];
var NumDigitObjName = divNameArrayDigit[ ( tunerType * 2 ) + tunerinfoObj.m_band ];
var curStep = -1;
var repeatCnt = 4;
if( ( tunerinfoObj.m_band == 1 ) && ( g_Info.m_infoTuner.m_fmstepfreq == 0.05 ) ){
repeatCnt = 5;
}
for( var i = 0; i < repeatCnt; i++ ){
curValue[i] = GetEleId( NumDigitObjName + (i+1) ).innerHTML;
if( curValue[i] == "-" ){
if( curStep == -1 ){
curStep = i;
}
}
}
var maxFreq;
var minFreq;
var minStep;
var minUnit;
var mag = 1;
if( tunerinfoObj.m_band == 0 ){
maxFreq = g_Info.m_infoTuner.m_ammaxfreq;
minFreq = g_Info.m_infoTuner.m_amminfreq;
minStep = g_Info.m_infoTuner.m_amstepfreq;
minUnit = 1;
mag = 1;
if( curStep == 0 ){
if( num == 0 )return;
if( ( num >= 2 ) && ( num <= 4 ) )return;
if( num != 1 ){
GetEleId( NumDigitObjName + (curStep+1) ).innerHTML = "";
curValue[ curStep ] = 0;
curStep++;
}
}
}else{
maxFreq = g_Info.m_infoTuner.m_fmmaxfreq;
minFreq = g_Info.m_infoTuner.m_fmminfreq;
minStep = g_Info.m_infoTuner.m_fmstepfreq;
minUnit = 0.1;
mag = 10;
if( minStep == 0.05 ){
minUnit = 0.01;
mag = 100;
}
if( curStep == 0 ){
if(
( num == 0 )||
( num == 2 )||
( num == 3 )||
( num == 4 )||
( num == 5 )||
( num == 6 )
){
return;
}else if( num == 7 ){
if( minFreq >= 80 ){
return;
}
}else{
}
if( num != 1 ){
GetEleId( NumDigitObjName + (curStep+1) ).innerHTML = "";
curValue[ curStep ] = 0;
curStep++;
}
}
}
if( num == -1 ){
var newValueMin = TunerGetNewFreq( curValue, repeatCnt, 0, curStep, false )/mag;
if( curStep == -1 ){
if( ( newValueMin <= maxFreq ) && ( newValueMin >= minFreq ) )
{
TunerSetFreq( ( newValueMin ), tunerType, tunerinfoObj.m_band );
}
}else{
if( newValueMin < minFreq ){
newValueMin = minFreq;
}else{
if( newValueMin > maxFreq ){
newValueMin = maxFreq;
}else{
var rest = ( (newValueMin*mag) - (minFreq*mag) ) % (minStep*mag);
if( rest != 0 ){
var scount = ( (newValueMin*mag) - (minFreq*mag) ) / (minStep*mag);
newValueMin = minFreq + minStep*scount;
}
}
}
TunerSetFreq( ( newValueMin ), tunerType, tunerinfoObj.m_band );
}
for( var i = 0; i < repeatCnt; i++ ){
GetEleId( NumDigitObjName + (i+1) ).innerHTML = "-";
}
setInitialAvailableNumKeyPad( tunerType, tunerinfoObj.m_band, minFreq );
}else if( num == -2 ){
for( var i = 0; i < repeatCnt; i++ ){
GetEleId( NumDigitObjName + (i+1) ).innerHTML = "-";
}
setInitialAvailableNumKeyPad( tunerType, tunerinfoObj.m_band, minFreq );
}else{
if( curStep < 0 )return;
var newValueMax = TunerGetNewFreq( curValue, repeatCnt, num, curStep, true )/mag;
var newValueMin = TunerGetNewFreq( curValue, repeatCnt, num, curStep, false )/mag;
if( ( ( newValueMax <= maxFreq ) && ( newValueMax >= minFreq ) ) ||
( ( newValueMin <= maxFreq ) && ( newValueMin >= minFreq ) ) )
{
if( ( repeatCnt - 1 ) == curStep ){
var rest = ( (newValueMax*mag) - (minFreq*mag) ) % (minStep*mag);
if( rest ){
return;
}else{
GetEleId( NumDigitObjName + (curStep+1) ).innerHTML = num;
}
}else{
GetEleId( NumDigitObjName + (curStep+1) ).innerHTML = num;
}
setAvailableNumKeyPad( NumDigitObjName, tunerType, repeatCnt, maxFreq, minFreq, minStep , mag );
}
}
}
function setInitialAvailableNumKeyPad( tunerType, band, minFreq ){
var divNameArrayNumKey = [ "numkeyTuner", "numkeyHd" ];
var objKeyName = divNameArrayNumKey[ tunerType ];
if( band == 0 ){
for( var i = 0; i < 10; i++ ){
GetEleId( objKeyName + i ).className = "systemmemorynum";
}
GetEleId( objKeyName + 2 ).className = "systemmemorynumoff";
GetEleId( objKeyName + 3 ).className = "systemmemorynumoff";
GetEleId( objKeyName + 4 ).className = "systemmemorynumoff";
}else{
for( var i = 0; i < 10; i++ ){
GetEleId( objKeyName + i ).className = "systemmemorynumoff";
}
if( minFreq < 80 ){
GetEleId( objKeyName + 7 ).className = "systemmemorynum";
GetEleId( objKeyName + 8 ).className = "systemmemorynum";
GetEleId( objKeyName + 9 ).className = "systemmemorynum";
}else{
GetEleId( objKeyName + 1 ).className = "systemmemorynum";
GetEleId( objKeyName + 8 ).className = "systemmemorynum";
GetEleId( objKeyName + 9 ).className = "systemmemorynum";
}
}
}
function setAvailableNumKeyPad( NumDigitObjName, tunerType, repeatCnt, maxFreq, minFreq, minStep , mag){
var curValue = [ "", "", "", "", "" ];
var curStep = -1;
for( var i = 0; i < repeatCnt; i++ ){
curValue[i] = GetEleId( NumDigitObjName + (i+1) ).innerHTML;
if( curValue[i] == "-" ){
if( curStep == -1 ){
curStep = i;
}
}
}
var divNameArrayNumKey = [ "numkeyTuner", "numkeyHd" ];
var objKeyName = divNameArrayNumKey[ tunerType ];
if( curStep == -1 ){
for( var i = 0; i < 10; i++ ){
GetEleId( objKeyName + i ).className = "systemmemorynumoff";
}
return;
}
for( var i = 0; i < 10; i++ ){
var newValueMax = TunerGetNewFreq( curValue, repeatCnt, i, curStep, true )/mag;
var newValueMin = TunerGetNewFreq( curValue, repeatCnt, i, curStep, false )/mag;
if( ( ( newValueMax <= maxFreq ) && ( newValueMax >= minFreq ) ) ||
( ( newValueMin <= maxFreq ) && ( newValueMin >= minFreq ) ) )
{
if( ( repeatCnt - 1 ) == curStep ){
var rest = ( (newValueMax*mag) - (minFreq*mag) ) % (minStep*mag);
if( rest ){
GetEleId( objKeyName + i ).className = "systemmemorynumoff";
}else{
GetEleId( objKeyName + i ).className = "systemmemorynum";
}
}else{
GetEleId( objKeyName + i ).className = "systemmemorynum";
}
}else{
GetEleId( objKeyName + i ).className = "systemmemorynumoff";
}
}
}
function TunerGetNewFreq( curValue, repeatCnt, num, curStep, isGetMax ){
var tempValue = [];
tempValue = curValue;
tempValue[ curStep ] = num;
var newValue = 0;
for( var i = 0; i < repeatCnt; i++ ){
newValue *= 10;
if( tempValue[i] == "-" ){
if( isGetMax ){
newValue += 9;
}else{
newValue += 0;
}
}else{
newValue += tempValue[i] * 1;
}
}
return newValue;
}
function TunerSetFreq( FreqNum, tunerType, band ){
var divNameArray2 = [ "tunerFreqTxt", "hdrFreqTxt" ];
GetEleId( divNameArray2[ tunerType ] ).innerHTML = FreqNum;
bandName = [ 'AM', 'FM' ];
tunerTypeName = [ 'Tuner', 'HD_Radio' ];
onBtnTunerSetFreq( tunerTypeName[ tunerType ], bandName[ band ], FreqNum );
}
function changeDisplayMainSettings( isMainToSetting ){
if( isMainToSetting ){
g_Zone=-1;
setTopMenuParameter();
GetEleId("divtoppage").style.display = "";
GetEleId("divzonepage").style.display = "none";
onBtnSettings();
}else{
}
}
function onBtnClickBack(){
if(
( checkInhibitForRecovery() == true )||
( checkInhibitForFirmwareUpdate() == true )
)
{
return;
}
if( g_Info.blnExistZone() == false ){
GetEleId("divtoppage").style.display = "none";
GetEleId("divsettingpage").style.display = "none";
g_Zone = 0;
changeDisplay();
}else{
GetEleId("divtoppage").style.display = "";
GetEleId("divsettingpage").style.display = "none";
}
}
function changeDisplay(onloading){
if( g_Zone != -1 ){
var isSurroundOn = 0;
var systemMemoryId = 0;
var systemMemoryId = 0;
var headertext = "headerfooter headerframe"+g_aClassNameSuffix[g_Zone];
var footertext = "headerfooter footerframe"+g_aClassNameSuffix[g_Zone];
if( g_Info.blnModelTypeHigh() == false ){
headertext = headertext + "Shift";
}
GetEleId("img_headerframe").className = headertext;
GetEleId("img_footerframe").className = footertext;
if( g_TopMenu == 0 ){
var imgtop = [ "-71px", "-220px", "-370px", "-519px" ];
GetEleId("zoneTopMenuBtnMaskImg").style.top = imgtop[g_Zone];
}
var imgtopbtnmask = [ "-69px", "-218px", "-368px", "-517px" ];
GetEleId("zoneBtnMaskImg").style.top = imgtopbtnmask[g_Zone];
GetEleId("div_bg_grad").style.backgroundImage = "url("+g_aBgImg[g_Zone]+")";
GetEleId("powerframeZoneName").innerHTML = g_aPwrZoneName[g_Zone];
if( g_Info.blnModelTypeHigh() == true ){
GetEleId("zoneSceneBtnMinus").style.display = "";
GetEleId("zoneSceneBtnPlus").style.display = "";
GetEleId("zoneSceneBtn1" ).style.display = "";
GetEleId("zoneSceneBtn2" ).style.display = "";
GetEleId("zoneSceneBtn3" ).style.display = "";
GetEleId("zoneSceneBtn4" ).style.display = "";
}
if( g_Zone == 0 ){
ChangePgmName();

setSurroundSelectDisplay( 1 );

setSystemMemoryDisplay( 0 );
setInputSelect( 0 );
}else{
setSurroundSelectDisplay( 0 );
setSystemMemoryDisplay( 1 );
setSystemMemory( g_Zone );
setInputSelect( g_Zone );
}
}
if( g_Zone == -1 ){
setTopMenuParameter();
}else{
setZoneParameter();
}
var b=navigator.appName.toUpperCase();
if( (b.indexOf("EXPLORER")>=0) || ( g_Animation == 0 ) ){
if( g_Zone == -1 ){
GetEleId("divtoppage").style.display = "";
GetEleId("divzonepage").style.display = "none";
}else{
GetEleId("divtoppage").style.display = "none";
GetEleId("divzonepage").style.display = "";
}
}else{
if( g_Zone == -1 ){
g_fadeOutFrame = GetEleId("divzonepage");
g_fadeInFrame = GetEleId("divtoppage");
}else{
g_fadeOutFrame = GetEleId("divtoppage");
g_fadeInFrame = GetEleId("divzonepage");
}
if( onloading ){
g_fadeOutFrame = GetEleId("divdummypage");
}
g_opacity = 1.0;
g_fadeOutFrame.style.zIndex = 100;
g_fadeInFrame.style.zIndex = 0;
g_fadeOutFrame.style.display = "";
g_fadeInFrame.style.display = "";
g_timer = setTimeout("TopFrameFade();",1);
}
}
function setTopPowerOffMask( OnOff ){
var obj = GetEleId("divtoppoweroffmaskVolume");
if( OnOff == 1 ){
if( obj.style.display != "" )obj.style.display = "";
}else{
if( obj.style.display != "none" )obj.style.display = "none";
}
}
function setZonePowerOffMask( OnOff ){
var obj = GetEleId("divzonemaskpage");
if( OnOff == 1 ){
if( obj.style.display != "" ){
obj.style.display = "";
setPowerOffMaskPulldown( true );
}
GetEleId("divpoweroffmaskVolume").style.display = "";
}else{
if( obj.style.display != "none" ){
obj.style.display = "none";
setPowerOffMaskPulldown( false );
}
GetEleId("divpoweroffmaskVolume").style.display = "none";
}
}

function setPowerOffMaskPulldown( OnOff )
{
  var pulldownlist = [
    "selectsleepzone",
    "zoneselectinputid",
    "selectsurroundsel",
    "tnetpreset",
    "hdrselectch",
    "hdrselectprg",
    "tunerradiopreset"
  ];

  for( var i = 0; i < pulldownlist.length; i++ )
  {
    GetEleId( pulldownlist[i] ).disabled = OnOff;
  }
}

function TopFrameFade(){
if( g_opacity > 0.0 ){
g_opacity -= g_opa_step;
if( g_opacity < 0.0 )g_opacity = 0.0;
g_fadeOutFrame.style.opacity = g_opacity;
g_timer=setTimeout( "TopFrameFade();", g_period );
}else{
clearInterval( g_timer );
g_opacity = 1.0;
g_fadeOutFrame.style.display = "none";
g_fadeOutFrame.style.opacity = g_opacity;
g_fadeInFrame.style.display = "";
}
}
var g_opacitySrc = 0.0;
var g_timerSrc = null;
var g_fadeOutFrameSrc = null;
var g_fadeInFrameSrc = null;
function SourceFrameFade(){
if( g_opacitySrc > 0.0 ){
g_opacitySrc -= g_opa_step;
if( g_opacitySrc < 0.0 )g_opacitySrc = 0.0;
g_fadeOutFrameSrc.style.opacity = g_opacitySrc;
g_timerSrc = setTimeout( "SourceFrameFade();", g_period );
}else{
clearInterval( g_timerSrc );
g_opacitySrc = 1.0;
g_fadeOutFrameSrc.style.display = "none";
g_fadeOutFrameSrc.style.opacity = g_opacitySrc;
g_fadeInFrameSrc.style.display = "";
}
}

/*------------------------------------------------------------------
--- fInfo Class
------------------------------------------------------------------*/
function fInfo()
{
  this.modelName = "";
  this.destination = "";
  this.existZoneMain=true;
  this.existZone2=false;
  this.existZone3=false;
  this.existZone4=false;

  this.blnPartyModeValid = function()
  {
    var blnRet = true;
  
    if( this.blnModelType673() == true )
    {
      blnRet = false;
    }
  
    return blnRet;
  };

  this.blnExistZone = function()
  {
    if( this.blnModelTypeUnder573() == true )
    {
    return false;
    }else{
    return true;
    }
  };

  this.GetMaxZoneNum = function()
  {
    var Num=0;
    if(this.blnOnlyFriendlyNameAvail()==false)
    {
    Num=1;
    if( this.existZone2 == true ){
    Num++;
    }
    if( this.existZone3 == true ){
    Num++;
    }
    if( this.existZone4 == true ){
    Num++;
    }
    }
    return Num;
  };

  this.blnModelTypeHigh = function()
  {
    var blnRet = false;
    if(
      (this.modelName.indexOf("RX-V3073" ) >= 0 ) ||
      (this.modelName.indexOf("RX-A3020") >= 0 ) ||
      (this.modelName.indexOf("RX-V2073") >= 0 ) ||
      (this.modelName.indexOf("RX-A2020") >= 0 ) ||
      (this.modelName.indexOf("RX-V1073") >= 0 ) ||
      (this.modelName.indexOf("RX-A1020") >= 0 )
    )
    {
    blnRet = true;
    }
    return blnRet;
  };

  this.blnModelType3073 = function()
  {
    return false;
  };

  this.blnModelType820 = function()
  {
    return false;
  };

  this.blnModelType673 = function()
  {
    return true;
  };

  this.blnModelTypeUnder573 = function()
  {
    return false;
  };

  this.blnIsExistPhono = function()
  {
    var blnRet = true;
    if( this.blnModelType673() == true )
    {
      blnRet = false;
    }
    else if( this.blnModelTypeHigh() == true )
    {
      
    }
    else
    {
    var dest = this.destination;
    if(( dest == "U" )||(dest=="C")){
    blnRet = false;
    }
    }
    return blnRet;
  };

  this.blnSurroundType = function()
  {
    var blnType = 0;
  
    if(
      (this.modelName.indexOf("RX-V3073" ) >= 0 ) ||
      (this.modelName.indexOf("RX-A3020") >= 0 )
    )
    {
      blnType = 1;
    }
    else if(
      (this.modelName.indexOf("RX-V2073") >= 0 ) ||
      (this.modelName.indexOf("RX-A2020") >= 0 )
    )
    {
      blnType = 2;
    }
  
    return blnType;
  };

  this.blnOnlyFriendlyNameAvail = function()
  {
    if( this.blnModelTypeUnder573() == true )
    {
      return true;
    }
    else
    {
      return false;
    }
  };

  this.m_existHD = false;
  this.blnExistHDRadio = function()
  {
    return this.m_existHD;
  };

  this.m_existTuner = false;
  this.m_existTunerRDS = false;
  this.m_existRhapsody = false;
  this.blnExistRhapsody = function()
  {
    return this.m_existRhapsody;
  };

  this.m_existSiriusIR = false;
  this.blnExistSiriusIR = function()
  {
    return this.m_existSiriusIR;
  };

  this.m_existPandora = false;
  this.blnExistPandora = function()
  {
    return this.m_existPandora;
  };

  this.m_macAddr = ["","","","","","","","","",""];
  this.m_ipDHCP = "On";
  this.m_ipIP_Address = "";
  this.m_ipSubnet_Mask = "";
  this.m_ipDefault_Gateway = "";
  this.m_ipDNS_Server_1 = "";
  this.m_ipDNS_Server_2 = "";
  this.m_partyMode = 0;
  this.m_partyModeTargetZone2 = false;
  this.m_partyModeTargetZone3 = false;
  this.m_partyModeTargetZone4 = false;
  this.m_Enhancer = 0;

  this.blnEnhancerStatus = function()
  {
    return this.m_Enhancer;
  };

  this.m_inputSet = -1;

  function infoZone()
  {
    this.m_OnOff = 0;
    this.m_volume = -60.0;
    this.m_mute = 0;
    this.m_input = gInput2IdxForAll[g_Audio1Name];
    this.m_surround;
    this.m_sleep = 0;
    this.m_zoneName = "";
    this.m_fixed = false;
  }

  this.m_Zone4InputNum = 7;
  this.m_Zone4InputName = ["","","","","","",""];
  this.GetTunerType = function()
  {
    var ret = CSTtunerTypeNone;
    if( this.m_existHD )
    {
      ret = CSTtunerTypeHD;
    }
    else
    {
      if( this.m_existTuner )
      {
        ret = CSTtunerTypeAnalog;
      }
    }
    return ret;
  }

  this.m_infoTuner = new function()
  {
    this.m_steMono = 0;
    this.m_band = 0;
    this.m_search = 0;
    this.m_frequency = 88.0;
    this.m_unit = 1;
    this.m_radiopreset = 0;
    this.m_Device = "";
    this.m_stereo = 0;
    this.m_tuned = 0;
    this.m_fmminfreq = 87.5;
    this.m_fmmaxfreq = 107.9;
    this.m_fmstepfreq = 0.2;
    this.m_amminfreq = 530;
    this.m_ammaxfreq = 1710;
    this.m_amstepfreq = 10;
    this.m_ProgramType = "";
    this.m_ProgramService = "";
    this.m_RadioTextA = "";
    this.m_RadioTextB = "";
    this.m_ClockTime = "";
  };

  this.m_infoHdradio = new function ()
  {
    this.m_steMono = 0;
    this.m_band = 0;
    this.m_search = 0;
    this.m_frequency = 88.0;
    this.m_unit = 1;
    this.m_radiopreset = 0;
    this.m_program = 0;
    this.m_stereo = 0;
    this.m_tuned = 0;
    this.m_HD = 0;
    this.m_Device = "";
    this.m_StationName = "";
    this.m_ProgramName = "";
    this.m_ProgramType = "";
    this.m_Title = "";
    this.m_Artist = "";
    this.m_Comment = "";
    this.m_ProgValid = [false,
    false,
    false,
    false,
    false,
    false,
    false,
    false];
  };

  this.m_infoNetwork = new function()
  {
    this.m_preset = 0;
    this.m_bookmark = 0;
    this.m_shuffle = 0;
    this.m_repeat = 0;
    this.m_Song = "";
    this.m_Artist = "";
    this.m_Album = "";
    this.m_Status = "";
    this.m_Station = "";
    this.m_Ch = "";
    this.m_Page = "";
    this.m_MenuName = "";
    this.m_Pos = 1;
    this.m_Line1 = "";
    this.m_Line2 = "";
    this.m_Line3 = "";
    this.m_Line4 = "";
    this.m_Line5 = "";
    this.m_Line6 = "";
    this.m_Line7 = "";
    this.m_Line8 = "";
    this.m_Container1 = "";
    this.m_Container2 = "";
    this.m_Container3 = "";
    this.m_Container4 = "";
    this.m_Container5 = "";
    this.m_Container6 = "";
    this.m_Container7 = "";
    this.m_Container8 = "";
  };

  this.m_infoiPod = new function()
  {
    this.m_shuffle = 0;
    this.m_repeat = 0;
    this.m_Mode = 0;
    this.m_Device = "";
    this.m_Control = "";
    this.m_Song = "";
    this.m_Artist = "";
    this.m_Album = "";
    this.m_Status = "";
    this.m_Page = "";
    this.m_MenuName = "";
    this.m_Pos = 1;
    this.m_Line1 = "";
    this.m_Line2 = "";
    this.m_Line3 = "";
    this.m_Line4 = "";
    this.m_Line5 = "";
    this.m_Line6 = "";
    this.m_Line7 = "";
    this.m_Line8 = "";
    this.m_Container1 = "";
    this.m_Container2 = "";
    this.m_Container3 = "";
    this.m_Container4 = "";
    this.m_Container5 = "";
    this.m_Container6 = "";
    this.m_Container7 = "";
    this.m_Container8 = "";
  };

  this.m_info = [];

  for( var i = 0; i < CSTzoneNumMax ; i++ )
  {
    this.m_info.push( new infoZone() );
    if( i == 0 ){
    this.m_info[i].m_surround = 1;
    }
  }

  this.m_onZonePowerOnOff = function( zone, l_OnOff ){ this.m_info[ zone ].m_OnOff = l_OnOff; };

  this.m_setVolume        = function( zone, value ){ this.m_info[ zone ].m_volume   = value; };
  this.m_setMute          = function( zone, value ){ this.m_info[ zone ].m_mute     = value; };
  this.m_setInput         = function( zone, value ){ this.m_info[ zone ].m_input    = value; };
  this.m_setSur           = function( zone, value ){ this.m_info[ zone ].m_surround = value; };
  this.m_setSleep         = function( zone, value ){ this.m_info[ zone ].m_sleep    = value; };
}

function DispZoneRename()
{
for( var i = 0; i < CSTzoneNumMax ; i++ ){
if( g_Info.m_info[i].m_zoneName != g_aDefaultZoneName[i] ){
GetEleId("z"+(i+1)+"name").innerHTML = g_Info.m_info[i].m_zoneName;
}else{
GetEleId("z"+(i+1)+"name").innerHTML = "";
}
}
}
function ValidSubframeBlock()
{
var i;
for( i=0 ; i<CSTzoneNumMax ; i++ )
{
if( i < g_Info.GetMaxZoneNum() ) {
GetEleId("subframeblock"+(i+1)).style.display = "";
}
else {
GetEleId("subframeblock"+(i+1)).style.display = "none";
}
}
}
function DispNewRename()
{
for( var i = 0; i < CSTzoneNumMax ; i++ ){
DispNewRenameOne(i, g_Info.m_info[i].m_zoneName,false);
}
}
function unescapeForXML(a) {
var str = null;
if ( a == "&amp;" ) { str = "&"; }
else if ( a == "&gt;" ) { str = ">"; }
else if ( a == "&lt;" ) { str = "<"; }
else if ( a == "&quot;" ) { str = '"'; }
else if ( a == "&apos;" ) { str = "'"; }
else { str = ""; }
return str;
}
function DispNewRenameOne(zone,val,init)
{
if( init == false ){
var name = val.replace(/&amp;|&gt;|&lt;|&quot;|&apos;/g, unescapeForXML);
GetEleId("settingNewRename"+(zone+1)).value = name;
}
}
function DispNewFriendlyName(val,init)
{
if( init == false ){
var name = val.replace(/&amp;|&gt;|&lt;|&quot;|&apos;/g, unescapeForXML);
GetEleId("settingNewFriendlyName").value =name;
}
}
function ValidNewRename()
{
var i;
for( i=0 ; i<CSTzoneNumMax ; i++ )
{
if( i < g_Info.GetMaxZoneNum() ) {
GetEleId("settingNewRenameTitle"+(i+1)).style.display = "";
GetEleId("settingNewRename" +(i+1)).style.display = "";
}
else {
GetEleId("settingNewRenameTitle"+(i+1)).style.display = "none";
GetEleId("settingNewRename" +(i+1)).style.display = "none";
}
}
}

function ChangePgmName()
{
  var i,j;
  var surType = g_Info.blnSurroundType();
  var obj = GetEleId("selectsurroundsel");
  var name ="";
  var len;

  if( obj.childNodes.length > 0 )
  {
    for(i=obj.childNodes.length-1; i>=0; i--)
    {
      obj.removeChild( obj.childNodes[i] );
    }
  }

  var optgr;
  var optprg;

  for( i=0;i<gPrgGrForAll.length;i++)
  {
    optgr = document.createElement('optgroup');
    optgr.label = gPrgGrForAll[i];

    for( j=0;j<gPrgForAll.length;j++)
    {
      name = gPrgForAll[j];
      if( gPrg2GrIdxForAll[ name ] == i )
      {
        if( surType == 0 )
        {
          if( checkSurroundOption(name,gPrgDifName_673_1073) )
          {
            continue;
          }
        }
        else
        {
          if( checkSurroundOption(name,gPrgDifName_2073_3073) )
          {
            continue;
          }
        }
        optprg = document.createElement('option');
        optprg.value = gPrg2IdxForAll[ name ];
        optprg.innerHTML = name;
        optgr.appendChild(optprg);
      }
    }
    obj.appendChild(optgr);
  }
  obj.selectedIndex=gPrg2IdxForAll[ g_DefaultPrgName ];
}

function checkSurroundOption( name, obj )
{
  for( var i=0; i<obj.length; i++ )
  {
    if( name == obj[i] )
    {
      return true;
    }
  }
  return false;
}

function DisplayValidSourceFrame( index, noFade )
{
  var l_PageIndex;
  var lTunerType;
l_PageIndex = g_inputIndex[ g_inputName[ index ] ];
if( g_inputName[ index ] == "TUNER" ){
lTunerType = g_Info.GetTunerType();
l_PageIndex = GetTunerPageIndex(lTunerType);
}
if( l_PageIndex < g_SrcFrmObj.length ){
setDisplaySourceFrame( l_PageIndex, noFade );
}
}
function GetTunerPageIndex(tunerType)
{
var ret;
switch(tunerType)
{
case CSTtunerTypeAnalog: ret = "0"; break;
case CSTtunerTypeHD: ret = "1"; break;
case CSTtunerTypeNone: ret = "5"; break;
}
return ret;
}
function GetbtnPx(bColor,onoff)
{
var ret;
if( bColor ) {
if( onoff ) { ret = "-407px"; }
else { ret = "-421px"; }
}
else {
if( onoff ) { ret = "-595px"; }
else { ret = "-609px"; }
}
return ret;
}
function SetCreateLinkZoneItem()
{
var lObj;
var i;
var num;
lObj = GetEleId("createlinkzoneitems");
lObj.length = 0;
num = g_Info.GetMaxZoneNum();
for( i=0 ; i<num ; i++ )
{
lObj.length++;
lObj.options[i].text = g_aDefaultZoneName[i] + " Page";
}
}
function ChangeNetUsbBtnLyout(index)
{
var inpname = g_inputName[index];
if( inpname == "NET RADIO" ){
GetEleId("vtunerlink_a").style.display = "";
GetEleId("netTitleTxtArtist").innerHTML = "Station";
GetEleId("netTitleTxtAlbum").innerHTML = "Album";
GetEleId("netTitleTxtSong").innerHTML = "Song";
GetEleId("netTitleTxtArtist").style.display = "";
GetEleId("netTitleTxtAlbum").style.display = "";
GetEleId("netusbinfotitle").innerHTML = "INFO NET RADIO"
}else if( inpname == "SIRIUS IR" ){
GetEleId("vtunerlink_a").style.display = "none";
GetEleId("netTitleTxtArtist").innerHTML = "Artist";
GetEleId("netTitleTxtAlbum").innerHTML = "Channel";
GetEleId("netTitleTxtSong").innerHTML = "Title";
GetEleId("netTitleTxtArtist").style.display = "";
GetEleId("netTitleTxtAlbum").style.display = "";
GetEleId("netusbinfotitle").innerHTML = "INFO SIRIUS IR"
}else if( inpname == "Pandora" ){
GetEleId("vtunerlink_a").style.display = "none";
GetEleId("netTitleTxtArtist").innerHTML = "Station";
GetEleId("netTitleTxtAlbum").innerHTML = "Album";
GetEleId("netTitleTxtSong").innerHTML = "Song";
GetEleId("netTitleTxtArtist").style.display = "";
GetEleId("netTitleTxtAlbum").style.display = "";
GetEleId("netusbinfotitle").innerHTML = "INFO Pandora"
}else{
GetEleId("vtunerlink_a").style.display = "none";
GetEleId("netTitleTxtArtist").innerHTML = "Artist";
GetEleId("netTitleTxtAlbum").innerHTML = "Album";
GetEleId("netTitleTxtSong").innerHTML = "Song";
GetEleId("netTitleTxtArtist").style.display = "";
GetEleId("netTitleTxtAlbum").style.display = "";
if( inpname == "USB" ){
GetEleId("netusbinfotitle").innerHTML = "INFO USB"
}else if( inpname == "Rhapsody" ){
GetEleId("netusbinfotitle").innerHTML = "INFO Rhapsody"
}else if( inpname == "SERVER" ){
GetEleId("netusbinfotitle").innerHTML = "INFO SERVER"
}else if( inpname == "iPod (USB)" ){
GetEleId("netusbinfotitle").innerHTML = "INFO iPod"
}else{
}
}
if( g_inputName[index] == "Pandora" ){
GetEleId("netThumbUpTxt").style.display = "";
GetEleId("netThumbDownTxt").style.display = "";
GetEleId("netThumbUpBtn").style.display = "";
GetEleId("netThumbDownBtn").style.display = "";
}else{
GetEleId("netThumbUpTxt").style.display = "none";
GetEleId("netThumbDownTxt").style.display = "none";
GetEleId("netThumbUpBtn").style.display = "none";
GetEleId("netThumbDownBtn").style.display = "none";
}
if(
( inpname == "USB" )||
( inpname == "Rhapsody" ) ||
( inpname == "SERVER" )
){
GetEleId("netEtcBtnBG").style.display = "";
GetEleId("netNetRadioBtnBG").style.display = "none";
GetEleId("netSiriusIrBtnBG").style.display = "none";
GetEleId("netRhapsodyBtnBG").style.display = "";
GetEleId("netPandoraBtnBG").style.display = "none";
GetEleId("netPauseCmdBtn").style.display = "";
GetEleId("netRevCmdBtn").style.display = "";
GetEleId("netFwdCmdBtn").style.display = "";
GetEleId("netPlayCmdBtn").style.display = "";
GetEleId("netPlayCmdBtn").style.left = "7px";
GetEleId("netStopCmdBtn").style.left = "108px";
GetEleId("netRevCmdBtn").style.left = "7px";
GetEleId("netFwdCmdBtn").style.left = "108px";
GetEleId("netPauseCmdBtn").style.left = "57px";
GetEleId("netPauseCmdBtn").style.top = "216px";
GetEleId("netShuffleOn").style.display = "";
GetEleId("netShuffleOff").style.display = "";
GetEleId("netRepeatOff").style.display = "";
GetEleId("netRepeatAll").style.display = "";
GetEleId("netRepeatSingle").style.display = "";
} else if( inpname == "NET RADIO" ){
GetEleId("netEtcBtnBG").style.display = "";
GetEleId("netNetRadioBtnBG").style.display = "";
GetEleId("netSiriusIrBtnBG").style.display = "none";
GetEleId("netRhapsodyBtnBG").style.display = "none";
GetEleId("netPandoraBtnBG").style.display = "none";
GetEleId("netPauseCmdBtn").style.display = "none";
GetEleId("netRevCmdBtn").style.display = "none";
GetEleId("netFwdCmdBtn").style.display = "none";
GetEleId("netPlayCmdBtn").style.display = "";
GetEleId("netPlayCmdBtn").style.display = "none";
GetEleId("netPlayCmdBtn").style.left = "24px";
GetEleId("netStopCmdBtn").style.left = "80px";
GetEleId("netRevCmdBtn").style.left = "24px";
GetEleId("netFwdCmdBtn").style.left = "80px";
GetEleId("netPauseCmdBtn").style.left = "57px";
GetEleId("netPauseCmdBtn").style.top = "216px";
GetEleId("netShuffleOn").style.display = "none";
GetEleId("netShuffleOff").style.display = "none";
GetEleId("netRepeatOff").style.display = "none";
GetEleId("netRepeatAll").style.display = "none";
GetEleId("netRepeatSingle").style.display = "none";
} else if( inpname == "Pandora" ){
GetEleId("netEtcBtnBG").style.display = "none";
GetEleId("netNetRadioBtnBG").style.display = "none";
GetEleId("netSiriusIrBtnBG").style.display = "none";
GetEleId("netRhapsodyBtnBG").style.display = "none";
GetEleId("netPandoraBtnBG").style.display = "";
GetEleId("netPauseCmdBtn").style.display = "";
GetEleId("netRevCmdBtn").style.display = "none";
GetEleId("netFwdCmdBtn").style.display = "";
GetEleId("netPlayCmdBtn").style.display = "";
GetEleId("netPlayCmdBtn").style.left = "24px";
GetEleId("netStopCmdBtn").style.left = "80px";
GetEleId("netRevCmdBtn").style.left = "24px";
GetEleId("netFwdCmdBtn").style.left = "80px";
GetEleId("netPauseCmdBtn").style.left = "24px";
GetEleId("netPauseCmdBtn").style.top = "273px";
GetEleId("netShuffleOn").style.display = "none";
GetEleId("netShuffleOff").style.display = "none";
GetEleId("netRepeatOff").style.display = "none";
GetEleId("netRepeatAll").style.display = "none";
GetEleId("netRepeatSingle").style.display = "none";
} else if( inpname == "SIRIUS IR" ){
GetEleId("netEtcBtnBG").style.display = "";
GetEleId("netNetRadioBtnBG").style.display = "";
GetEleId("netSiriusIrBtnBG").style.display = "none";
GetEleId("netRhapsodyBtnBG").style.display = "none";
GetEleId("netPandoraBtnBG").style.display = "none";
GetEleId("netPauseCmdBtn").style.display = "none";
GetEleId("netRevCmdBtn").style.display = "none";
GetEleId("netFwdCmdBtn").style.display = "none";
GetEleId("netPlayCmdBtn").style.display = "none";
GetEleId("netPlayCmdBtn").style.left = "24px";
GetEleId("netStopCmdBtn").style.left = "80px";
GetEleId("netRevCmdBtn").style.left = "24px";
GetEleId("netFwdCmdBtn").style.left = "80px";
GetEleId("netPauseCmdBtn").style.left = "57px";
GetEleId("netPauseCmdBtn").style.top = "216px";
GetEleId("netShuffleOn").style.display = "none";
GetEleId("netShuffleOff").style.display = "none";
GetEleId("netRepeatOff").style.display = "none";
GetEleId("netRepeatAll").style.display = "none";
GetEleId("netRepeatSingle").style.display = "none";
}else{
}
}
function ValidVolVertUpDown(zone)
{
var objUp;
var objDown;
var objTxt;
var objVol;
var objMute;
objMenu = GetEleId("zonemenustepradio");
objUp = GetEleId("zonevup");
objDown = GetEleId("zonevdown");
objTxt = GetEleId("_volverttxt");
objVol = GetEleId("metervert");
objMute = GetEleId("zonemutebtn");
if( zone == CSTzone4Index ) {
objMenu.style.display = "none";
objUp.style.display = "none";
objDown.style.display = "none";
objVol.className = "metervertouteropa";
objMute.style.display = "none";
}else if( ( zone == CSTzone2Index )||( zone == CSTzone3Index ) ){
if( g_Info.m_info[zone].m_fixed == true ){
objMenu.style.display = "none";
objUp.style.display = "none";
objDown.style.display = "none";
objVol.className = "metervertouteropa";
}else{
objMenu.style.display = "";
objUp.style.display = "";
objDown.style.display = "";
objTxt.style.display = "";
objVol.className = "metervertouter";
}
objMute.style.display = "";
}else{
objMenu.style.display = "";
objUp.style.display = "";
objDown.style.display = "";
objTxt.style.display = "";
objVol.className = "metervertouter";
objMute.style.display = "";
}
}
function ChangeTunerBtnRDS(blnRDS)
{
var objMinus = GetEleId("idtunerminus");
var objUp = GetEleId("idtunerup");
var objFreqLbl = GetEleId("idtunerfreqlbl");
var objFreqTxt = GetEleId("tunerFreqTxt");
var objUnitTxt = GetEleId("tunerUnitTxt");
var objTxtBk1 = GetEleId("idtunertxtback1");
var objTxtBk2 = GetEleId("idtunertxtback2");
var objBandLbl = GetEleId("idtunerbandlbl");
var objAmLbl = GetEleId("idtuneramlbl");
var objFmLbl = GetEleId("idtunerfmlbl");
var objAmBtn = GetEleId("idtunerambtn");
var objFmBtn = GetEleId("idtunerfmbtn");
if( blnRDS ) {
objMinus.style.top = "52px";
objUp.style.top = "52px";
objFreqLbl.style.top = "32px";
objFreqTxt.style.top = "61px";
objUnitTxt.style.top = "61px";
objTxtBk1.style.top = "52px";
objTxtBk2.style.top = "52px";
objBandLbl.style.top = "32px";
objAmLbl.style.top = "51px";
objFmLbl.style.top = "70px";
objAmBtn.style.top = "52px";
objFmBtn.style.top = "70px";
}
else {
objMinus.style.top = "182px";
objUp.style.top = "182px";
objFreqLbl.style.top = "162px";
objFreqTxt.style.top = "191px";
objUnitTxt.style.top = "191px";
objTxtBk1.style.top = "182px";
objTxtBk2.style.top = "182px";
objBandLbl.style.top = "162px";
objAmLbl.style.top = "181px";
objFmLbl.style.top = "200px";
objAmBtn.style.top = "182px";
objFmBtn.style.top = "200px";
}
}

function DspSettingMacFilter()
{
for( var i = 0; i < 10; i++ ) {
GetEleId("settingMac"+(i+1)).value = g_Info.m_macAddr[i];
}
}

function DspSettingIpAddress()
{
GetEleId("IpAddress0").value = g_Info.m_ipIP_Address;
GetEleId("IpAddress1").value = g_Info.m_ipSubnet_Mask;
GetEleId("IpAddress2").value = g_Info.m_ipDefault_Gateway;
GetEleId("IpAddress3").value = g_Info.m_ipDNS_Server_1;
GetEleId("IpAddress4").value = g_Info.m_ipDNS_Server_2;
var status = 0;
if( g_Info.m_ipDHCP == "On" ){
}else{
status = 1;
}
onDhcpOnOff(status);
}

function MuteSetting(zone,OnOff)
{
var lzone;
if( zone < 0 ) { lzone = 0; }
else { lzone = zone; }
setMuteImg(OnOff);
g_Info.m_info[lzone].m_mute = OnOff;
if( ( zone < 0 ) && ( g_Info.m_partyMode == 1 ) ){
onBtnAllZoneVolumeMute(OnOff);
}else{
onBtnVolumeMute(lzone,OnOff);
}
}

onLoad();