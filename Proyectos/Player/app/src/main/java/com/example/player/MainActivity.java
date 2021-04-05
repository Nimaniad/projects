package com.example.player;

import android.app.Activity;
import android.app.ProgressDialog;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.MediaController;
import android.widget.VideoView;

import java.io.IOException;


public class MainActivity extends Activity {

    private WebView myWebView;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        myWebView = (WebView) findViewById(R.id.webview);
        // Configuracion del buscador
        myWebView.getSettings().setLoadsImagesAutomatically(true);
        myWebView.getSettings().setJavaScriptEnabled(true);
        myWebView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);
        // Configuración del cliente a usa para abrir URLs
        myWebView.setWebViewClient(new WebViewClient());
        // Cargar la URL inicial
        myWebView.loadUrl("https://sanjuandelarambla.gestiturn.com/multimedia/player/8f539f7e-85f1-40e9-a0ff-ae430d078683");
        // ResponsiveLayout
        myWebView.getSettings().setUseWideViewPort(true);
        // Zoom out si el tamaño del contenido es mayor que el tamaño del viewport
        myWebView.getSettings().setLoadWithOverviewMode(true);



    }
}