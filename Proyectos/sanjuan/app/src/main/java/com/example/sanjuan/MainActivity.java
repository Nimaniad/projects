package com.example.sanjuan;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;

import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;



public class MainActivity extends Activity {

    private WebView myWebView;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        myWebView = (WebView) findViewById(R.id.webview);
        WebSettings webSettings = myWebView.getSettings();

        // Configuracion del buscador
        myWebView.getSettings().setLoadsImagesAutomatically(true);
        myWebView.getSettings().setJavaScriptEnabled(true);

        // Mejora la carga del Webview y uso de Cache
        myWebView.getSettings().setRenderPriority(WebSettings.RenderPriority.HIGH);
        myWebView.getSettings().setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK);
        myWebView.getSettings().setAppCacheEnabled(true);
        myWebView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);
        webSettings.setDomStorageEnabled(true);
        webSettings.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NARROW_COLUMNS);
        myWebView.getSettings().setUseWideViewPort(true);  // ResponsiveLayout
        webSettings.setSaveFormData(true);




        // enable Web Storage: localStorage, sessionStorage
        myWebView.getSettings().setDomStorageEnabled(true);
        // Configuración del cliente a usa para abrir URLs
        myWebView.setWebViewClient(new WebViewClient());
        myWebView.setWebChromeClient(new WebChromeClient());
        // Cargar la URL inicial  https://sanjuandelarambla.gestiturn.com/multimedia/player/60edb5a3-c210-40d9-940b-65f0a07fc09a // https://dracaena.gestiturn.com/multimedia/player/7d9d553e-81da-4057-84d3-c8c8bcdf9ee8
        myWebView.loadUrl("https://dracaena.gestiturn.com/multimedia/player/7d9d553e-81da-4057-84d3-c8c8bcdf9ee8");
        // Zoom out si el tamaño del contenido es mayor que el tamaño del viewport
        myWebView.getSettings().setLoadWithOverviewMode(true);



    }
}