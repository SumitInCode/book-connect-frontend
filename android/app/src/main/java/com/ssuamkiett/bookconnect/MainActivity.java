package com.ssuamkiett.bookconnect;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
      @Override
      @RequiresApi(api = Build.VERSION_CODES.M)
      protected void onCreate(Bundle savedInstanceState) {
          super.onCreate(savedInstanceState);

          // Enforce light status bar
          getWindow().getDecorView().setSystemUiVisibility(
              View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
          );
          getWindow().setStatusBarColor(android.graphics.Color.WHITE);
      }
}
