namespace("Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation").ArticleListType={List:0,CompactList:1,Thumbnails:2,DetailedList:3},namespace("Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation").ArticleList=function(){this.FolderId=0,this.ShowImage=!0,this.ShowTitle=!0,this.ShowDescription=!0,this.ShowMoreLink=!0,this.MoreLabel="",this.MaxArticles=3,this.ListMode=Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation.ArticleListType.List},angular.module("Cerberus.Tool.TemplateEngine").controller("Cerberus.Tool.TemplateEngine.Controller.ControlPlugin.Navigation.ArticleList",["$scope","$injector",function(a,b){var c=new Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation.ArticleList;a.GetImageSource=function(b,c){var d="";return a.ControlData.ListMode==Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation.ArticleListType.CompactList?d=b.Thumbnail:a.ControlData.ListMode==Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation.ArticleListType.Thumbnails?d=b.Thumbnail:a.ControlData.ListMode==Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation.ArticleListType.DetailedList?d=0==c?b.Image:b.Thumbnail:a.ControlData.ListMode==Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation.ArticleListType.List&&(d=b.Image),d},require(["/Module/CMS/Service/Article.js"],function(){a.ArticleService=b.get("Cerberus.Module.CMS.Service.Article"),a.$watch("TemplateControl.Content",function(){var b=null!=a.ControlData?a.ControlData.FolderId:0;a.ControlData=JSON.tryParse(a.TemplateControl.Content,c);var d=Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation.ArticleListType;a.ClassMap={List:a.ControlData.ListMode==d.List,CompactList:a.ControlData.ListMode==d.CompactList,Thumbnails:a.ControlData.ListMode==d.Thumbnails,DetailedList:a.ControlData.ListMode==d.DetailedList},a.ControlData.FolderId<=0?a.MenuItems=[]:b!=a.ControlData.FolderId&&(a.MenuItems=a.ArticleService?a.ArticleService.GetArticles(a.ControlData.FolderId,{Publication:1}):[])}),a.$digest()})}]);