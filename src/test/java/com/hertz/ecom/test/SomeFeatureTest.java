package com.hertz.ecom.test;

import org.junit.Test;
import static org.assertj.core.api.Assertions.assertThat;
import static org.fluentlenium.core.filter.FilterConstructor.*;
import org.fluentlenium.adapter.FluentTest;

public class SomeFeatureTest extends FluentTest {

    @Test
    public void test_something() {
        goTo("http://kwebapp.mybluemix.net");
        find("span", withText().contains("random message"));
    }
}
