#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'O. A. Rodríguez'
SITENAME = u'Gatomontez'
SITEURL = 'http://gatomontez.com/'

TIMEZONE = 'America/Mexico_City'

DEFAULT_LANG = u'es'
DEFAULT_CATEGORY = u'sin-categoria'

CATEGORY_URL = u'categoria/{slug}.html'
CATEGORY_SAVE_AS = u'categoria/{slug}.html'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
LINKS = (
    ('Pelican', 'http://getpelican.com/'),
    ('IPython', 'http://ipython.org/'),
    ('Python.org', 'http://python.org/'),)

# Social widget
SOCIAL = (
    ('facebook', 'http://www.facebook.com/gatomontezweb'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True
