Search.setIndex({docnames:["changelog","datasets","index","installing","io","models","transforms","utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["changelog.rst","datasets.rst","index.rst","installing.rst","io.rst","models.rst","transforms.rst","utils.rst"],objects:{"doctr.datasets":{CORD:[1,0,1,""],CharacterGenerator:[1,0,1,""],FUNSD:[1,0,1,""],OCRDataset:[1,0,1,""],SROIE:[1,0,1,""],encode_sequences:[1,1,1,""]},"doctr.datasets.datasets":{VisionDataset:[1,0,1,""]},"doctr.datasets.loader":{DataLoader:[1,0,1,""]},"doctr.io":{Artefact:[4,0,1,""],Block:[4,0,1,""],Document:[4,0,1,""],DocumentFile:[4,0,1,""],Line:[4,0,1,""],PDF:[4,0,1,""],Page:[4,0,1,""],Word:[4,0,1,""],decode_img_as_tensor:[4,1,1,""],read_html:[4,1,1,""],read_img_as_numpy:[4,1,1,""],read_img_as_tensor:[4,1,1,""],read_pdf:[4,1,1,""]},"doctr.io.Document":{show:[4,2,1,""]},"doctr.io.DocumentFile":{from_images:[4,2,1,""],from_pdf:[4,2,1,""],from_url:[4,2,1,""]},"doctr.io.PDF":{as_images:[4,2,1,""],get_artefacts:[4,2,1,""],get_words:[4,2,1,""]},"doctr.io.Page":{show:[4,2,1,""]},"doctr.models.detection":{db_mobilenet_v3_large:[5,1,1,""],db_resnet50:[5,1,1,""],detection_predictor:[5,1,1,""],linknet16:[5,1,1,""]},"doctr.models.export":{convert_to_fp16:[5,1,1,""],convert_to_tflite:[5,1,1,""],quantize_model:[5,1,1,""]},"doctr.models.recognition":{crnn_mobilenet_v3_large:[5,1,1,""],crnn_vgg16_bn:[5,1,1,""],master:[5,1,1,""],recognition_predictor:[5,1,1,""],sar_resnet31:[5,1,1,""],sar_vgg16_bn:[5,1,1,""]},"doctr.models.zoo":{ocr_predictor:[5,1,1,""]},"doctr.transforms":{ColorInversion:[6,0,1,""],Compose:[6,0,1,""],LambdaTransformation:[6,0,1,""],Normalize:[6,0,1,""],OneOf:[6,0,1,""],RandomApply:[6,0,1,""],RandomBrightness:[6,0,1,""],RandomContrast:[6,0,1,""],RandomGamma:[6,0,1,""],RandomHue:[6,0,1,""],RandomJpegQuality:[6,0,1,""],RandomRotate:[6,0,1,""],RandomSaturation:[6,0,1,""],Resize:[6,0,1,""],ToGray:[6,0,1,""]},"doctr.utils.metrics":{LocalizationConfusion:[7,0,1,""],OCRMetric:[7,0,1,""],TextMatch:[7,0,1,""]},"doctr.utils.metrics.LocalizationConfusion":{summary:[7,2,1,""]},"doctr.utils.metrics.OCRMetric":{summary:[7,2,1,""]},"doctr.utils.metrics.TextMatch":{summary:[7,2,1,""]},"doctr.utils.visualization":{visualize_page:[7,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","function","Python function"],"2":["py","method","Python method"]},objtypes:{"0":"py:class","1":"py:function","2":"py:method"},terms:{"0123456789":1,"0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz":1,"02562":5,"0361328125":5,"06640625":5,"0966796875":5,"100":[5,6,7],"1000":5,"1024":[5,7],"108":[],"110":7,"116":[],"123":[],"126":[],"128":5,"131":[],"1357421875":5,"1396484375":5,"1420":[],"150":7,"154":1,"1552":[],"160":5,"1630859375":5,"1684":[],"16bn":[],"1778":[],"1782":[],"185546875":5,"1900":[],"1910":5,"199":5,"1999":[],"200":7,"2012":[],"2019":2,"2021":2,"224":[5,6],"225":6,"229":6,"2504":[],"255":[4,5,6,7],"256":5,"2710":[],"30595":5,"3232421875":5,"340":5,"3456":[],"3515625":5,"406":6,"456":6,"485":6,"51171875":5,"512":[],"529":[],"533":[],"540":[],"5478515625":5,"580":[],"5810546875":5,"583":[],"595":[],"597":[],"600":[5,7],"611":[],"625":[],"629":[],"630":[],"640":[],"641":[],"652":[],"653":[],"660":[],"664":[],"665":[],"666":[],"672":[],"689":[],"700":[],"701":[],"702":[],"713":[],"721":[],"733":[],"735":[],"745":[],"753":[],"775":[],"780":[],"781":[],"783":[],"789":[],"800":[5,7],"817":[],"8275l":5,"830":[],"856":[],"8564453125":5,"857":[],"860":[],"8603515625":5,"862":[],"863":[],"875":[],"913":[],"914085328578949":5,"917":[],"921":[],"9578408598899841":5,"9949972033500671":5,"\u00e0\u00e2\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00e7\u00e0\u00e2\u00e9\u00e8\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00e7":1,"\u00e0\u00e2\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00fc\u00e7\u00e0\u00e2\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00fc\u00e7":[],"\u00e1\u00e0\u00e2\u00e3\u00e9\u00ea\u00eb\u00ed\u00ef\u00f3\u00f4\u00f5\u00fa\u00fc\u00e7\u00e1\u00e0\u00e2\u00e3\u00e9\u00eb\u00ed\u00ef\u00f3\u00f4\u00f5\u00fa\u00fc\u00e7":[],"\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\u00f1":[],"\u00e4\u00f6\u00fc\u00df\u00e4\u00f6\u00fc\u00df":[],"abstract":1,"boolean":[],"byte":[4,5],"case":[1,7],"class":[1,4,6,7],"default":[4,5],"export":[2,4,7],"final":[],"float":[4,6,7],"function":[5,6,7],"import":[1,4,5,6,7],"int":[1,4,5,6,7],"new":[],"public":2,"return":[1,4,5,7],"static":7,"true":[1,4,5,6,7],"while":6,AWS:[2,5],And:5,EOS:1,FPS:5,For:[3,5],IDs:5,Its:5,The:[1,4,5,7],Then:5,abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz:1,abdef:1,abl:[],about:5,abov:5,accent:[],access:[1,2,4],account:[],accuraci:7,achiev:[],activ:[],add:[6,7],add_label:7,adding:6,addition:5,address:4,adjust:6,after:[],again:3,aggreg:[1,7],align:4,all:[1,2,4,5,6,7],along:5,also:5,analysi:[4,5],angl:[4,6],ani:[1,2,4,5,6,7],annot:4,anoth:[1,3,5],anyon:2,api:[],appli:[1,6],applic:5,appropri:5,arch:5,architectur:[2,5],archiv:[],arg:1,argument:[1,4],around:5,arrai:[4,7],art:2,artefact:[5,7],artefact_typ:4,arxiv:5,as_imag:4,asarrai:7,ascii_lett:1,aspect:[2,6],assess:7,assign:7,associ:4,assum:[],assume_straight_pag:[],astyp:[5,7],attend:[2,5],autoclass:[],autom:2,avail:[2,5,6],averag:[5,6],avoid:3,aws:[],b_j:7,backbon:5,backend:5,base:5,baselin:5,bash:3,batch:[1,5,6],batch_siz:1,bbox:[],been:[5,7],befor:[1,6],begin:7,being:[5,7],belong:[],below:[],benchmark:[],beta:2,better:5,between:[6,7],bgr:4,bilinear:[5,6],binar:[2,5],binari:4,blank:[],block:[5,7],block_1_1:[],blue:[],bmvc:[],bodi:[],bool:[1,4,5,6,7],both:[2,5,6],bottom:[],bound:[1,4,6,7],box:[1,4,7],brew:3,bright:6,browser:[],build:3,c_j:[],cach:1,cache_sampl:1,cairo:3,callabl:[1,6],can:[1,3,5],capabl:5,cfg:[],changelog:2,channel:[4,5,6],charact:[1,2,4,5,7],charactergener:1,charg:5,charset:[],chart:4,check:5,classif:[],classmethod:4,clone:3,code:[2,3,4],collate_fn:1,collect:4,color:6,colorinvers:6,column:4,com:[3,4],combin:5,common:[6,7],compar:2,comparison:7,competit:1,compil:[],complementari:7,compon:5,compos:[1,2,5],comprehens:[],comput:[5,7],conda:[],confid:[4,5],confus:7,consecut:[5,6],consid:[1,4,7],consist:[],consolid:[1,2],constant:6,constraint:[],contain:[],content:[1,4],contrast:6,contrast_factor:6,conv_sequ:5,convers:4,convert:[4,5,6],convert_page_to_numpi:4,convert_to_fp16:5,convert_to_tflit:5,convolut:2,coordin:4,cord:[1,2,5],core:[5,7],corner:[],correct:6,correspond:[3,5],counterpart:7,cpu:[2,5],crnn:[2,5],crnn_mobilenet_v3_larg:5,crnn_mobilenet_v3_smal:[],crnn_resnet31:5,crnn_vgg16_bn:5,crnn_vgg16_bn_predictor:[],crop:5,currenc:1,current:[],daili:2,data:[2,4,5,6,7],dataload:1,dataset:5,date:5,db_crnn_resnet:5,db_crnn_vgg:5,db_mobilenet_v3_larg:5,db_resnet50:5,db_resnet50_predictor:[],db_sar_resnet:5,db_sar_vgg:5,dbnet:[2,5],decod:4,decode_img_as_tensor:4,deep:5,def:[],defer:1,defin:7,deform:5,degre:6,degress:4,delimit:[],delta:6,demo:[],depend:[2,3],deploy:[],describ:5,descript:[],design:6,desir:4,det_arch:5,detail:[],detect:[],detection_predictor:5,detectionmetr:[],detectionpredictor:5,develop:3,developp:3,deviat:6,dict:[4,5,7],dictionari:[4,7],differenti:[2,5],differentiable_binar:5,digit:1,dimens:[4,5,7],dimension:6,directli:5,disclaim:5,disk:[],displai:[4,7],display_artefact:7,distanc:[],distribut:6,div:[],divid:4,doc:[4,5],docartefact:[],doctr:3,document:[1,5,7],documentfil:4,don:[],done:6,download:1,downsiz:[],draw:6,draw_proba:[],drop:1,drop_last:1,dtype:[4,5],dummy_img:[],dynam:1,dynamic_seq_length:1,each:[1,2,4,5,6,7],easi:[2,7],easier:5,easili:[4,5,7],effici:[1,5],either:5,element:[1,4,5],enabl:[1,4],enclos:4,encod:[1,4,5],encode_sequ:1,end:[1,2,7],engin:5,english:[],enhanc:[],enough:5,entir:4,eos:1,equiv:[],error:[],etc:4,evalu:[1,2,5],everyth:[],exact:7,exactmatch:[],exampl:[1,4,5,6,7],exclud:5,expand:6,expect:[4,5,6],experi:5,explan:5,exploit:5,export_as_straight_box:[],export_as_xml:[],express:6,extens:4,extra:3,extract:[1,2],extract_arch:1,extractor:5,f_a:7,factor:6,fallback:[],fals:[1,5,6,7],famili:[],fast:1,favorit:[],featur:[3,5,7],feed:5,few:3,figsiz:7,figur:7,file:[1,2],file_hash:1,file_nam:1,file_path:[],find:3,fine:2,firsthand:1,fitz:4,flag:[],flexibl:7,float16:[],float32:[4,5],folder:[1,5],follow:[1,3,5,6,7],font:[],font_famili:[],font_siz:[],foral:7,form:[1,2,5],format:[4,5],forpost:[1,2],fp16:[1,5],frac:7,frame:5,framework:[1,3,4,6],french:[1,5],friendli:2,from:[1,2,4,5,6,7],from_imag:4,from_keras_model:[],from_pdf:4,from_url:4,full:[1,5,7],fulli:[],funsd:[1,2,5],g_x:7,gamma:6,gaussian:6,gdk:3,gener:1,geometri:[4,5],geq:7,german:[],get:[4,5],get_artefact:4,get_word:4,gettextword:4,git:2,github:3,given:[1,4,5,7],good:[],googl:[],googlevis:2,gpu:2,graph:4,grayscal:6,ground:7,groung:[],gt_box:[],gt_label:[],gtk:3,gts:[],gvision:5,half:5,handl:1,has:[1,7],hat:7,have:[1,5,7],head:[],height:4,hello:7,help:[],here:[1,3,5,6],high:4,higher:3,hocr:[],homebrew:[],horizont:4,hsv:6,html:[],http:[3,4,5],hue:6,icdar2019:1,icdar:2,identifi:[2,5],ignor:[],ignore_acc:[],ignore_cas:[],iiit5k:[],iiit:[],imag:[1,4,5,6,7],imagenet:[],img:[1,6],img_cont:4,img_fold:1,img_path:4,implement:[1,4,5,6,7],includ:[3,5],increas:6,index:4,indic:7,infer:[2,6],inference_input_typ:[],inference_output_typ:[],inform:[1,2,5],inherit:[1,5],input:[4,5,6],input_pag:[5,7],input_shap:5,input_t:5,input_tensor:5,inspir:6,instal:2,instanc:5,instanti:5,instead:[1,4],int64:[],int8:[],integ:7,integr:2,interact:[4,7],interpol:[5,6],interpret:[1,4],intersect:7,invert:6,invoic:5,involv:5,iou:7,iou_thresh:7,irregular:5,isn:1,iter:1,its:[1,4,5,7],jpeg:6,jpegqual:6,jpg:[1,4],json:5,json_output:5,just:5,kera:5,kernel_s:5,keyword:[1,4],kwarg:[1,4,5,7],l_j:7,label:[1,7],label_fil:1,lambda:6,lambdatransform:6,lang:[],languag:[2,4,5],larg:5,largest:7,last:[1,3,5],latest:3,latin:1,layout:5,learn:5,least:3,left:7,legacy_french:[],length:1,let:5,letter:[],level:[5,7],levenshtein:[],leverag:[],libffi:3,librari:3,light:2,limits_:7,line:[2,5,7],line_1_1:[],linknet16:5,linknet:[2,5],linux:3,list:[1,4,6],load:[2,5],loader:1,local:[1,2,5,7],localis:[],localizationconfus:7,locat:4,logo:4,look:[],lower:[6,7],maco:3,made:2,mai:[],main:[],maintain:2,make:[5,7],mani:[],map:1,mask_shap:7,master:[2,5],match:[2,7],mathcal:7,matplotlib:7,max:7,max_angl:6,max_area:[],max_delta:6,max_dist:[],max_gain:6,max_gamma:6,max_qual:6,max_ratio:[],maximum:[1,6],maxval:[5,6],mbox:7,mean:[6,7],meaniou:7,meant:4,measur:5,meta:[],method:6,metric:[5,7],might:5,min_area:[],min_gain:6,min_gamma:6,min_qual:6,min_ratio:[],min_val:6,minde:3,minim:[],minimum:[3,7],minval:6,miss:3,mix:2,mobilenet:5,mobilenet_v3_larg:[],mobilenet_v3_large_r:[],mobilenet_v3_smal:[],mobilenet_v3_small_r:[],mobilenetv3:[],mobilenetv3_larg:[],mobilenetv3_smal:[],mode:3,model:[1,7],modifi:[],modul:[4,5,6,7],moment:[],more:5,most:5,multi:2,multipl:[1,4,6],multipli:6,name:[1,5],natur:2,ndarrai:[1,4,7],necessari:3,need:[3,7],neg:6,nest:5,nestedobject:[],network:[2,5],neural:[2,5],newer:[],next:1,noisi:[1,2],non:[2,4,6,7],none:[1,4,5],normal:[5,6],note:[0,2],now:2,num_sampl:1,number:[1,6,7],numpi:[1,4,5,7],object:[1,5],obtain:[],ocr:[1,2,7],ocr_carea:[],ocr_db_crnn:7,ocr_db_crnn_vgg:[],ocr_db_sar_resnet:[],ocr_db_sar_vgg:[],ocr_lin:[],ocr_pag:[],ocr_par:[],ocr_predictor:5,ocrdataset:1,ocrmetr:7,ocrpredictor:5,ocrx_word:[],offset:6,onc:5,one:[1,5,6],oneof:6,ones:1,onli:[6,7],oper:[],ops:[4,6],opsset:[],optic:[2,5],optim:2,option:[1,4,7],order:[1,4,5],org:5,organ:4,orient:[4,5],otherwis:7,our:5,out:[5,6,7],outpout:[],output:[4,6],output_s:[4,6],over:[1,3,7],overlai:4,overwrit:1,own:2,packag:[2,7],pad:[1,5,6],page1:4,page2:4,page:[3,5,7],page_1:[],page_idx:[4,5],pair:7,pango:3,paper:5,par_1_1:[],param:[5,6],paramet:[1,2,4,5,6,7],pars:[1,2],part:6,parti:3,pass:[1,5],path:[1,4,5],pathlib:4,pdf:[4,5],per:[5,6],perform:[2,4,5,6,7],phase:[],physic:4,pick:6,pictur:4,pip:3,pixbuf:3,pixel:[4,6],platinum:5,plot:7,plt:7,png:4,polygon:1,pool:[],portugues:[],posit:7,possibl:7,post:5,postprocessor:[],potenti:5,power:2,ppageno:[],pre:[],precis:[5,7],pred:[],pred_box:[],pred_label:[],predefin:1,predict:[4,7],predictor:[],prefer:1,preprocessor:5,prerequisit:2,present:[],preserv:6,preserve_aspect_ratio:6,pretrain:[2,5,7],print:[],prior:[],privat:5,probabl:6,procedur:6,process:[2,4],processor:5,produc:5,product:[],properli:1,properti:5,provid:[2,5],publicli:[],punctuat:1,purpos:[],pyplot:7,python:[2,4,6],pytorch:[2,3],qualiti:6,quantiz:5,quantize_model:5,quickli:2,quicktour:[],rand:[5,7],random:[5,6,7],randomappli:6,randombright:6,randomcontrast:6,randomcrop:[],randomgamma:6,randomhu:6,randomjpegqu:6,randomli:6,randomrot:6,randomsatur:6,rang:6,ratio:6,raw:[4,7],read:[2,5],read_html:4,read_img:4,read_img_as_numpi:4,read_img_as_tensor:4,read_pdf:4,reader:[],readi:[],real:[5,6],recal:[5,7],receipt:[1,2,5],reco_arch:5,recognit:7,recognition_predictor:5,recognitionpredictor:5,rectangular:[],recurr:2,red:[],reduc:[3,6],refer:[2,3,5],regroup:7,rel:4,relat:4,releas:[0,3],relu:5,repositori:[],repr:[],repres:[4,5],represent:5,representative_dataset:[],requir:[3,6],research:2,resiz:[5,6],resnet31:[],resnet:5,resolv:4,resourc:[],respons:[],rest:[6,7],result:[4,5],resum:[],reusabl:5,rgb:[4,6],rgb_output:4,right:[5,7],rnn:[],road:[],robust:2,root:1,rotat:[1,4,6],rotated_bbox:[1,7],run:3,same:[4,5,7],sampl:1,sample_transform:1,sar:[2,5],sar_resnet31:5,sar_resnet31_predictor:[],sar_vgg16_bn:5,sar_vgg16_bn_predictor:[],satur:6,save:[1,5],saved_model:5,scale:7,scan:[1,2],scene:[2,5],scheme:5,score:7,scratch:2,seamless:2,seamlessli:[],search:[],second:5,section:5,seemlessli:2,seen:5,segment:5,semant:5,sens:7,sensit:[],separ:5,sequenc:[1,4,5,7],sequenti:[5,6],serial:5,serialized_model:5,set:[1,5,7],sever:[4,6],sha256:[],shape:[4,5,6,7],share:[],shift:6,should:[1,4,6,7],show:[2,4,5,7],shuffl:1,side:7,signatur:4,signific:1,simpl:5,sinc:1,size:[1,4,5,6],small:2,smallest:4,some:3,sos:1,sourc:[1,4,5,6,7],span:[],spanish:[],spatial:4,special:2,specif:[1,3,5,7],specifi:[1,4],speed:[2,5],sroie:[1,2],stabl:3,stage:2,standard:6,start:1,state:2,statist:5,std:6,str:[1,4,5,6,7],straight:1,stream:4,street:[],strictli:7,string:[1,4,5,7],strive:3,strong:5,structur:[2,5],subset:[1,5],sum:7,summari:7,support:5,supported_op:[],supported_typ:[],svt:[],symbol:[],symmetr:6,symmetric_pad:6,synthes:[],synthesize_pag:[],synthet:[],synthtext:[],system:[],take:1,target:[1,4,5,6],target_s:1,target_spec:[],task:[1,2,5],tax:5,templat:4,tensor:[1,4,5,6],tensorflow:[2,3,4,5,6],text:[4,7],textmatch:7,textract:[2,5],textual:[1,2,4],tf_model:5,tflite:5,tflite_builtins_int8:[],tfliteconvert:[],than:[3,7],thei:[],them:[1,3,5],thi:[3,5,7],thing:[],third:3,those:[3,4,5],through:[1,6],time:[1,5,7],titl:4,togeth:[4,5],tograi:6,top:7,torch:3,torchvis:6,toward:3,train:[1,5,6],train_it:1,train_load:1,train_set:1,trainabl:5,tranform:6,transcrib:[],transfo:6,transform:[1,2],truth:7,tune:2,tupl:[4,5,6,7],turn:[],two:4,type:[4,5],typic:5,ucsd:[],uint8:[4,5,7],underli:1,underneath:4,understand:[1,2,5],unfortun:[],unidecod:7,uniform:[5,6],uniformli:6,uninterrupt:4,union:[4,7],updat:7,upper:[1,6],url:[1,4],usabl:5,usag:5,use:[1,5,7],useabl:[],used:5,user:[2,3,4],uses:1,using:[1,3,5],utf:[],util:[2,5],valu:[4,5,6],valuabl:2,varieti:[],variou:[],veri:[],verifi:1,version:5,vgg16:5,vgg16_bn:[],vgg:5,via:2,view:[],vision:[],visiondataset:1,visual:2,visualize_pag:7,vocab:[2,5],vocabulari:1,wai:[1,2,5],want:[],warm:5,warmup:[],web:4,websit:[],welcom:2,well:[],were:4,when:[],where:[4,7],whether:[1,4,6,7],which:5,whichev:3,width:4,window:[3,7],wish:[],without:5,word:[2,5,7],word_1_1:[],word_1_2:[],word_1_3:[],words_onli:7,worker:1,world:7,wrap:[],wrapper:[1,6],written:4,www:4,x12larg:5,x_ascend:[],x_descend:[],x_i:7,x_size:[],x_wconf:[],xeon:5,xhtml:[],xmax:4,xmin:4,xml:[],xml_bytes_str:[],xml_element:[],xml_output:[],xmln:[],y_i:7,y_j:7,yield:[],ymax:4,ymin:4,you:[3,5],your:[1,4,5,7],yoursit:4,zero:[5,6]},titles:["Changelog","doctr.datasets","DocTR: Document Text Recognition","Installation","doctr.io","doctr.models","doctr.transforms","doctr.utils"],titleterms:{"2021":0,"export":5,Using:5,approach:5,architectur:[],artefact:4,avail:1,backbon:[],block:4,build:2,changelog:0,choos:[],compos:6,compress:5,conda:[],content:[],data:1,dataset:[1,2],detect:[2,5],doctr:[1,2,4,5,6,7],document:[2,4],end:5,evalu:7,featur:2,file:4,get:2,git:3,half:[],implement:[],infer:[],instal:3,integr:[],line:4,lite:[],load:1,main:2,model:[2,5],notebook:[],ocr:5,output:5,packag:3,page:4,post:[],pre:5,precis:[],predictor:[2,5],prepar:[],prerequisit:3,process:5,python:3,quantiz:[],read:4,recognit:[2,5],right:[],savedmodel:5,should:[],stage:5,start:2,structur:4,support:[1,2,6],task:7,tensorflow:[],text:[2,5],train:2,transform:6,two:5,util:7,via:3,visual:7,vocab:1,what:[],word:4,your:2,zoo:[2,5]}})