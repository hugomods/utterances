'use strict'

import { default as params } from '@params';
import Utterances from 'utterances/js';

const utterances = new Utterances(params.endpoint);
window.Utterances = utterances;
