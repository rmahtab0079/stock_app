from .settings import *

STATICFILES_DIRS = [
    os.path.join(os.path.dirname(BASE_DIR), "assets"),
]

WEBPACK_LOADER = {
    'DEFAULT': {
            'BUNDLE_DIR_NAME': 'bundles/',
            'STATS_FILE': os.path.join(os.path.dirname(BASE_DIR), 'webpack-stats.prod.json'),
        }
}