package com.example.player;

import android.app.Activity;
import android.app.Fragment;
import android.os.Bundle;
import android.os.Handler;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ProgressBar;

/*
 * BrowseErrorActivity shows how to use ErrorFragment
 */
public class BrowseErrorActivity extends Activity {
    private static final int TIMER_DELAY = 3000;
    private static final int SPINNER_WIDTH = 100;
    private static final int SPINNER_HEIGHT = 100;

    private ErrorFragment mErrorFragment;
    private SpinnerFragment mSpinnerFragment;

    /**
     * Called when the activity is first created.
     */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        testError();
    }

    private void testError() {
        mErrorFragment = new ErrorFragment();
        getFragmentManager()
                .beginTransaction()
                .add(R.id.main_browse_fragment, mErrorFragment)
                .commit();

        mSpinnerFragment = new SpinnerFragment();
        getFragmentManager()
                .beginTransaction()
                .add(R.id.main_browse_fragment, mSpinnerFragment)
                .commit();

        final Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                getFragmentManager()
                        .beginTransaction()
                        .remove(mSpinnerFragment)
                        .commit();
                mErrorFragment.setErrorContent();
            }
        }, TIMER_DELAY);
    }

    public static class SpinnerFragment extends Fragment {
        @Override
        public View onCreateView(
                LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
            ProgressBar progressBar = new ProgressBar(container.getContext());
            if (container instanceof FrameLayout) {
                FrameLayout.LayoutParams layoutParams =
                        new FrameLayout.LayoutParams(SPINNER_WIDTH, SPINNER_HEIGHT, Gravity.CENTER);
                progressBar.setLayoutParams(layoutParams);
            }
            return progressBar;
        }
    }
}