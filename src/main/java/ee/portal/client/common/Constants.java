package ee.portal.client.common;

public class Constants {

    public static final String ANT_PATTERN_ALL = "/**";

    private static final String API_VERSION = "/v1";

    public static final String AUDITOR_AWARE_REF = "loggedInUserAuditorAware";

    public static final String COLUMN_COUNTRY_ID = "country_id";
    public static final String COLUMN_USER_ID = "user_id";

    public static final String ENDPOINT_CLIENT = API_VERSION + "/client";
    public static final String ENDPOINT_COUNTRY = API_VERSION + "/country";
    public static final String ENDPOINT_LOGIN = API_VERSION + "/login";
    public static final String ENTITY_COUNTRY = "country";

    public static final String HEADER_AUTHORIZATION = "Authorization";

    public static final String PREFIX_AUTHORIZATION = "Bearer";
    public static final String PROPERTY_BASE_PATH = "${spring.data.rest.basePath}";
    public static final String PROPERTY_JWT_SECRET = "${jwt.secret}";
    public static final String PROPERTY_JWT_TOKEN_VALIDITY_TIME = "${jwt.token.validity.time}";

    public static final String STRING_EMPTY = "";
}
